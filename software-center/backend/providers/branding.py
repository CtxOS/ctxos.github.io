import json
import os

class BrandingProvider:
    """Manages OEM branding and customization overrides."""

    def __init__(self):
        self.config_path = os.path.join(os.path.dirname(__file__), 'branding.json')
        self.override_path = '/etc/default/software-center-oem'
        self.branding = self._load_branding()

    def _load_branding(self):
        # 1. Load defaults
        try:
            with open(self.config_path, 'r') as f:
                branding = json.load(f)
        except Exception:
            branding = {
                "name": "Debian Base Kit",
                "primary_color": "#38bdf8",
                "accent_color": "#818cf8"
            }

        # 2. Check for system-wide OEM overrides
        if os.path.exists(self.override_path):
            try:
                with open(self.override_path, 'r') as f:
                    overrides = json.load(f)
                    branding.update(overrides)
            except Exception as e:
                print(f"Error loading OEM overrides: {e}")

        return branding

    def get_config(self):
        return self.branding
