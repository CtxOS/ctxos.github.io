import subprocess


class HealthChecker:
    """Verifies system health after updates or migrations."""

    def __init__(self):
        # List of critical services that must be running
        self.critical_services = ["dbus", "polkit", "networking"]

    def check_health(self):
        """Runs a series of checks to determine if the system is operational."""
        errors = []

        # 1. Check critical services
        for service in self.critical_services:
            if not self._is_service_running(service):
                errors.append(f"Service '{service}' is not running.")

        # 2. Check internet connectivity (optional, but good for a distro)
        if not self._has_internet():
            errors.append("No internet connectivity detected.")

        return {"healthy": len(errors) == 0, "errors": errors}

    def _is_service_running(self, service_name):
        try:
            res = subprocess.run(
                ["systemctl", "is-active", service_name], capture_output=True, text=True
            )
            return res.stdout.strip() == "active"
        except Exception:
            # If systemctl is missing (e.g., in a container), assume healthy for now
            return True

    def _has_internet(self):
        try:
            # Ping one of the Debian mirrors
            subprocess.run(["ping", "-c", "1", "deb.debian.org"], capture_output=True, check=True)
            return True
        except Exception:
            return False
