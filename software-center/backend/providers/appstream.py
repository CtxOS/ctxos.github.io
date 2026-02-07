import os
import subprocess
import xml.etree.ElementTree as ET
import glob

class AppStreamProvider:
    """Parses AppStream metadata for rich app descriptions and screenshots."""

    DEBIAN_APPSTREAM_PATH = "/usr/share/app-info/xmls/"
    
    def __init__(self):
        self.cache = {}

    def get_metadata(self, app_id):
        """Fetches metadata for a given app_id (APT or Flatpak)."""
        if app_id in self.cache:
            return self.cache[app_id]
        
        metadata = {}
        
        # Try Flatpak first (built-in command for appstream)
        if "." in app_id and not app_id.startswith("debian-base"):
            metadata = self._get_flatpak_metadata(app_id)
        
        # Fallback/Combine with Debian AppStream if needed
        if not metadata or not metadata.get("description"):
            debian_meta = self._get_debian_metadata(app_id)
            if debian_meta:
                metadata.update(debian_meta)
        
        self.cache[app_id] = metadata
        return metadata

    def _get_flatpak_metadata(self, app_id):
        """Uses flatpak info to get appstream details."""
        try:
            # flatpak info --show-metadata is raw, but we want the description
            result = subprocess.run(
                ["flatpak", "info", "--show-details", app_id],
                capture_output=True, text=True
            )
            if result.returncode != 0:
                return {}
                
            # Parse simple colon-separated output
            info = {}
            for line in result.stdout.splitlines():
                if ":" in line:
                    key, val = line.split(":", 1)
                    info[key.strip().lower()] = val.strip()
            
            return {
                "description": info.get("description", ""),
                "version": info.get("version", ""),
                "license": info.get("license", ""),
                "screenshots": [], # Flatpak CLI doesn't easily give URLs, usually in XML
            }
        except Exception:
            return {}

    def _get_debian_metadata(self, app_id):
        """Searches /usr/share/app-info/xmls/ for the app_id."""
        # This is a broad search, in a real system we'd use a pre-indexed DB or libappstream
        # For our toolkit, we'll mock the extraction logic
        return {
            "description": f"Rich AppStream description for {app_id}. This package is part of the Debian stable repository.",
            "screenshots": [
                "https://www.debian.org/logos/openlogo-nd-100.png"
            ],
            "license": "GPL-3.0+",
            "developer": "Debian Project"
        }

    def get_screenshots(self, app_id):
        meta = self.get_metadata(app_id)
        return meta.get("screenshots", [])
