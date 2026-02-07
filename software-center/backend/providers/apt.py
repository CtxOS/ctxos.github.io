import subprocess
import json
import re

class AptProvider:
    """Provides access to APT and dpkg for package management."""

    def __init__(self):
        pass

    def get_package_info(self, package_name):
        """Gets detailed info about a package."""
        try:
            result = subprocess.run(
                ["apt-cache", "show", package_name],
                capture_output=True, text=True, check=True
            )
            return self._parse_apt_show(result.stdout)
        except (subprocess.CalledProcessError, FileNotFoundError):
            # Mock data for development
            if "debian-base" in package_name:
                return {
                    "Package": package_name,
                    "Version": "1.0.0",
                    "Description": f"This is a mock description for {package_name}",
                    "Installed-Size": "1024",
                    "Origin": "debian-base-kit"
                }
            return None

    def list_packages(self, search_term=None):
        """Lists available packages, optionally filtered by search_term."""
        try:
            cmd = ["apt-cache", "pkgnames"]
            if search_term:
                cmd.append(search_term)
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            return result.stdout.splitlines()
        except (subprocess.CalledProcessError, FileNotFoundError):
            # Mock data for development
            return ["debian-base-core", "debian-base-desktop", "debian-base-tools"]

    def is_installed(self, package_name):
        """Checks if a package is installed."""
        try:
            result = subprocess.run(
                ["dpkg-query", "-W", "-f='${Status}'", package_name],
                capture_output=True, text=True
            )
            return "install ok installed" in result.stdout
        except (subprocess.CalledProcessError, FileNotFoundError):
            # Mock some packages as installed
            return package_name in ["debian-base-core"]

    def _parse_apt_show(self, output):
        """Parses the output of apt-cache show."""
        info = {}
        # Simple parser for Debian control-file format
        current_key = None
        for line in output.splitlines():
            if line.startswith(" "):
                if current_key:
                    info[current_key] += "\n" + line.strip()
            elif ":" in line:
                key, value = line.split(":", 1)
                current_key = key.strip()
                info[current_key] = value.strip()
        return info

    def get_updates(self):
        """Check for available updates."""
        try:
            # We don't run update here, just list-upgradable
            result = subprocess.run(
                ["apt", "list", "--upgradable"],
                capture_output=True, text=True
            )
            updates = []
            for line in result.stdout.splitlines()[1:]: # Skip 'Listing...'
                if '/' in line:
                    updates.append(line.split('/')[0])
            return updates
        except Exception:
            return []
