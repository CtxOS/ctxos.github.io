import threading
import time
import subprocess
from providers.apt import AptProvider
from providers.flatpak import FlatpakProvider

class UpdateMonitor(threading.Thread):
    """
    Background thread that checks for updates periodically.
    """
    def __init__(self, callback, interval=3600):
        super().__init__()
        self.callback = callback
        self.interval = interval
        self.daemon = True
        self.running = False
        self.apt = AptProvider()
        self.flatpak = FlatpakProvider()

    def run(self):
        self.running = True
        while self.running:
            print("[UpdateMonitor] Checking for updates...")
            update_count = self.check_updates()
            if update_count > 0:
                print(f"[UpdateMonitor] Found {update_count} updates!")
                self.callback(update_count)
            
            # Wait for interval, but check running flag frequently
            for _ in range(self.interval):
                if not self.running:
                    break
                time.sleep(1)

    def check_updates(self):
        count = 0
        
        # Check APT updates
        try:
            apt_updates = self.apt.get_updates()
            count += len(apt_updates)
        except Exception as e:
            print(f"[UpdateMonitor] APT Error: {e}")

        # Check Flatpak updates
        if self.flatpak.has_flatpak:
            try:
                result = subprocess.run(
                    ["flatpak", "update", "--appstream"],
                    capture_output=True, text=True
                )
                result = subprocess.run(
                    ["flatpak", "remote-ls", "--updates"],
                    capture_output=True, text=True
                )
                # Count lines of output (each line is an update)
                count += len(result.stdout.strip().splitlines())
            except Exception as e:
                print(f"[UpdateMonitor] Flatpak Error: {e}")

        return count

    def stop(self):
        self.running = False
