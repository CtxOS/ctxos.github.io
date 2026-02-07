import subprocess
import json
import os

class FlatpakProvider:
    """Provides access to Flatpak for package management."""

    def __init__(self):
        self.has_flatpak = self._check_flatpak()

    def _check_flatpak(self):
        try:
            subprocess.run(["flatpak", "--version"], capture_output=True, check=True)
            return True
        except (subprocess.CalledProcessError, FileNotFoundError):
            return False

    def list_apps(self):
        """Lists installed flatpak applications."""
        if not self.has_flatpak:
            return []
        
        try:
            # List installed apps with specific columns
            result = subprocess.run(
                ["flatpak", "list", "--app", "--columns=application,name,version,origin,installation"],
                capture_output=True, text=True, check=True
            )
            return self._parse_list_output(result.stdout, installed=True)
        except subprocess.CalledProcessError:
            return []

    def search(self, query):
        """Searches for apps in configured remotes (e.g., Flathub)."""
        if not self.has_flatpak:
            return []
            
        try:
            result = subprocess.run(
                ["flatpak", "search", "--columns=application,name,description,version,remotes", query],
                capture_output=True, text=True, check=True
            )
            return self._parse_search_output(result.stdout)
        except (subprocess.CalledProcessError, FileNotFoundError):
            # Mock data for search if query matches common tools
            if "browser" in query.lower():
                return [{
                    "id": "org.mozilla.firefox",
                    "name": "Firefox",
                    "description": "Fast, Private & Safe Web Browser",
                    "version": "122.0",
                    "repo": "flathub",
                    "type": "flatpak",
                    "installed": False
                }]
            return []

    def get_app_details(self, app_id):
        """Gets detailed info about a specific flatpak."""
        if not self.has_flatpak:
            return None
            
        try:
            result = subprocess.run(
                ["flatpak", "info", app_id],
                capture_output=True, text=True, check=True
            )
            # Basic parsing of flatpak info output
            info = {"id": app_id, "type": "flatpak"}
            for line in result.stdout.splitlines():
                if ":" in line:
                    key, val = line.split(":", 1)
                    info[key.strip()] = val.strip()
            return info
        except (subprocess.CalledProcessError, FileNotFoundError):
            return None

    def is_installed(self, app_id):
        """Checks if a specific flatpak is installed."""
        if not self.has_flatpak:
            return False
        try:
            subprocess.run(["flatpak", "info", app_id], capture_output=True, check=True)
            return True
        except subprocess.CalledProcessError:
            return False

    def _parse_list_output(self, output, installed=False):
        apps = []
        lines = output.strip().splitlines()
        for line in lines:
            parts = line.split("\t")
            if len(parts) >= 2:
                apps.append({
                    "id": parts[0].strip(),
                    "name": parts[1].strip(),
                    "version": parts[2].strip() if len(parts) > 2 else "",
                    "repo": parts[3].strip() if len(parts) > 3 else "flathub",
                    "type": "flatpak",
                    "installed": installed
                })
        return apps

    def _parse_search_output(self, output):
        apps = []
        lines = output.strip().splitlines()
        for line in lines:
            parts = line.split("\t")
            if len(parts) >= 2:
                apps.append({
                    "id": parts[0].strip(),
                    "name": parts[1].strip(),
                    "description": parts[2].strip() if len(parts) > 2 else "",
                    "version": parts[3].strip() if len(parts) > 3 else "",
                    "repo": parts[4].strip() if len(parts) > 4 else "flathub",
                    "type": "flatpak",
                    "installed": self.is_installed(parts[0].strip())
                })
        return apps
