import os

from api.i18n import I18nProvider
from api.profiles import ProfileSwitcher
from providers.appstream import AppStreamProvider
from providers.apt import AptProvider
from providers.branding import BrandingProvider
from providers.flatpak import FlatpakProvider
from providers.hardware import HardwareProvider
from providers.meta import MetaProvider


class AppManager:
    def __init__(self):
        self.apt = AptProvider()
        self.meta = MetaProvider(self.apt)
        self.flatpak = FlatpakProvider()
        self.appstream = AppStreamProvider()
        self.profiles = ProfileSwitcher(self.apt, self.meta)
        self.hardware = HardwareProvider()
        self.branding = BrandingProvider()

        # Initialize i18n
        locales_dir = os.path.join(os.path.dirname(__file__), "..", "locales")
        self.i18n = I18nProvider(locales_dir)

    def get_translations(self):
        """Returns the current translations for the frontend."""
        return self.i18n.get_translations()

    def get_branding(self):
        """Returns the current OEM branding configuration."""
        return self.branding.get_config()

    def get_repo_status(self):
        """Returns the status and priority of the system repositories."""
        # In a real system, we'd check /etc/apt/sources.list.d/
        return {
            "primary": "ctxos.github.io",
            "upstream": "deb.debian.org",
            "status": "online",
            "priority_enforced": True,
        }

    def get_featured_apps(self):
        """Returns a list of featured apps and suggested stacks."""
        apps = self.meta.list_profiles()

        # Add hardware-specific suggestions
        apps += self.hardware.get_suggested_stacks()

        return apps

    def get_categories(self):
        """Returns the list of available categories."""
        return [
            {"id": "system", "name": "System", "icon": "emblem-system-symbolic"},
            {
                "id": "development",
                "name": "Development",
                "icon": "applications-engineering-symbolic",
            },
            {"id": "media", "name": "Media", "icon": "applications-multimedia-symbolic"},
            {"id": "server", "name": "Server", "icon": "network-server-symbolic"},
            {"id": "security", "name": "Security", "icon": "security-high-symbolic"},
        ]

    def get_all_apps(self, category=None):
        """Returns all apps, optionally filtered by category."""
        # Start with Meta-packages and Profiles
        all_apps = self.meta.get_meta_packages() + self.meta.list_profiles()

        # Add Flatpaks
        all_apps += self.flatpak.list_apps()

        if not category:
            return all_apps

        filtered = []
        for app in all_apps:
            # Check if categorizable
            app_id = app.get("id", "").lower()

            if category == "security":
                if "security" in app_id or "tools" in app_id or app_id.startswith("ctxos-tools-"):
                    filtered.append(app)
            elif category == "system":
                if "core" in app_id or "desktop" in app_id or "system" in app_id:
                    filtered.append(app)
            elif category == "development":
                if "dev" in app_id or "build" in app_id:
                    filtered.append(app)
            # Default to showing everything else if no match, or implement specific logic

        return filtered if filtered else all_apps

    def get_app_details(self, app_id):
        """Gets full details for a specific app/package (APT or Flatpak)."""
        # Fetch rich metadata first
        rich_meta = self.appstream.get_metadata(app_id)

        # Try Flatpak first
        if "." in app_id and not app_id.startswith("debian-base"):
            info = self.flatpak.get_app_details(app_id)
            if info:
                return {
                    "id": app_id,
                    "name": info.get("Name", app_id),
                    "version": info.get("Version", rich_meta.get("version", "")),
                    "description": rich_meta.get("description") or info.get("Description", ""),
                    "repo": info.get("Origin", "flathub"),
                    "type": "flatpak",
                    "installed": self.flatpak.is_installed(app_id),
                    "screenshots": rich_meta.get("screenshots", []),
                    "license": rich_meta.get("license", ""),
                }

        # Fallback to APT
        info = self.apt.get_package_info(app_id)
        if not info:
            # Check if it's a profile
            for p in self.meta.PROFILES.values():
                if p["id"] == app_id:
                    p_details = p.copy()
                    p_details["screenshots"] = rich_meta.get("screenshots", [])
                    # Add migration info
                    active = self.profiles.get_active_profile()
                    if active and active["id"] != app_id:
                        p_details["can_switch"] = True
                        p_details["migration"] = self.profiles.get_migration_impact(app_id)
                    else:
                        p_details["can_switch"] = False
                    return p_details
            return None

        return {
            "id": app_id,
            "name": info.get("Package", app_id),
            "version": info.get("Version", ""),
            "description": rich_meta.get("description") or info.get("Description", ""),
            "size": info.get("Size", ""),
            "installed_size": info.get("Installed-Size", ""),
            "repo": info.get("Origin", "Debian"),
            "section": info.get("Section", ""),
            "installed": self.apt.is_installed(app_id),
            "screenshots": rich_meta.get("screenshots", []),
            "license": rich_meta.get("license", ""),
        }

    def search_apps(self, query):
        """Searches for apps in the repo."""
        # Search in meta-packages/APT first
        results = []
        all_local = self.get_all_apps()
        for app in all_local:
            if query.lower() in app["name"].lower() or query.lower() in app["id"].lower():
                results.append(app)

        # Then search in Flatpaks (remotes)
        flatpak_results = self.flatpak.search(query)
        results += flatpak_results

        return results
