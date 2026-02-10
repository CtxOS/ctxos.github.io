import subprocess


class HardwareProvider:
    """Detects system hardware to suggest relevant stacks/drivers."""

    def __init__(self):
        self.gpu_info = self._get_gpu_info()

    def _get_gpu_info(self):
        """Basic detection of GPU vendors."""
        try:
            # Use lspci to find VGA controllers
            result = subprocess.run(["lspci"], capture_output=True, text=True)
            output = result.stdout.lower()

            vendors = []
            if "nvidia" in output:
                vendors.append("nvidia")
            if "intel" in output:
                vendors.append("intel")
            if "amd" in output or "ati" in output:
                vendors.append("amd")

            return vendors
        except (subprocess.CalledProcessError, FileNotFoundError):
            return ["mock"]

    def get_suggested_stacks(self):
        """Returns stack IDs suggested for the current hardware."""
        suggestions = []

        if "nvidia" in self.gpu_info:
            suggestions.append(
                {
                    "id": "driver-nvidia",
                    "name": "NVIDIA Proprietary Drivers",
                    "description": "Optimized drivers for your NVIDIA GPU.",
                    "type": "stack",
                    "icon": "video-display",
                    "installed": False,
                }
            )

        if "intel" in self.gpu_info:
            suggestions.append(
                {
                    "id": "driver-intel",
                    "name": "Intel Media SDK",
                    "description": "Hardware acceleration for Intel graphics.",
                    "type": "stack",
                    "icon": "video-display",
                    "installed": False,
                }
            )

        return suggestions
