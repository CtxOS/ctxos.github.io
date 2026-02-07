#!/usr/bin/env python3
# fleet-manager.py - A lightweight monitoring and command service for CtxOS nodes
import json
import os
import platform
import subprocess
import socket
from http.server import HTTPServer, BaseHTTPRequestHandler

class FleetDashboard(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self._send_html()
        elif self.path == '/api/status':
            self._send_status()

    def _send_html(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        
        # Simple but premium looking status dashboard built-in
        html = """
        <html>
        <head>
            <title>CtxOS Fleet Node Status</title>
            <style>
                body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: #f1f5f9; padding: 40px; }
                .card { background: #1e293b; border-radius: 12px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 1px solid #334155; max-width: 600px; margin: auto; }
                h1 { color: #38bdf8; margin-top: 0; }
                .status-item { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #334155; }
                .badge { padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
                .healthy { background: #065f46; color: #34d399; }
                .warning { background: #92400e; color: #fbbf24; }
            </style>
            <script>
                setInterval(async () => {
                    const res = await fetch('/api/status');
                    const data = await res.json();
                    document.getElementById('version').textContent = data.version;
                    document.getElementById('healthy').className = 'badge ' + (data.healthy ? 'healthy' : 'warning');
                    document.getElementById('healthy').textContent = data.healthy ? 'HEALTHY' : 'UNHEALTHY';
                    
                    document.getElementById('archive-size').textContent = data.archive_size;
                    document.getElementById('mirror-status').className = 'badge ' + (data.mirror_synced ? 'healthy' : 'warning');
                    document.getElementById('mirror-status').textContent = data.mirror_synced ? 'SYNCED' : 'OUTDATED';
                }, 5000);
            </script>
        </head>
        <body>
            <div class="card">
                <h1>Node: {{HOSTNAME}}</h1>
                <div class="status-item">
                    <span>Toolkit Version</span>
                    <strong id="version">...</strong>
                </div>
                <div class="status-item">
                    <span>System Health</span>
                    <span id="healthy" class="badge">Checking...</span>
                </div>
                <div class="status-item">
                    <span>Architecture</span>
                    <strong>{{ARCH}}</strong>
                </div>
                <h2>Ecosystem Health</h2>
                <div class="status-item">
                    <span>Archive Size</span>
                    <strong id="archive-size">...</strong>
                </div>
                <div class="status-item">
                    <span>Mirror Status</span>
                    <span id="mirror-status" class="badge">Checking...</span>
                </div>
            </div>
        </body>
        </html>
        """.replace("{{HOSTNAME}}", socket.gethostname()).replace("{{ARCH}}", platform.machine())
        self.wfile.write(html.encode())

    def _send_status(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        # Real status gathering
        version = "unknown"
        if os.path.exists("VERSION"):
            with open("VERSION", "r") as f: version = f.read().strip()
            
        # In a real system, we'd query our health provider
        status = {
            "node": socket.gethostname(),
            "version": version,
            "healthy": True,
            "uptime": subprocess.getoutput("uptime -p"),
            "archive_size": subprocess.getoutput("du -sh archive 2>/dev/null | cut -f1") or "0B",
            "mirror_synced": True # Logic would check timestamp of last mirror sync
        }
        self.wfile.write(json.dumps(status).encode())

def run(port=8080):
    server_address = ('', port)
    httpd = HTTPServer(server_address, FleetDashboard)
    print(f"Starting Fleet Node Dashboard on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
