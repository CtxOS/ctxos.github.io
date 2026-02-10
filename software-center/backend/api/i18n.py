import json
import locale
import os


class I18nProvider:
    """Provides translation services for the Software Center."""

    def __init__(self, locales_dir):
        self.locales_dir = locales_dir
        self.current_lang = self._detect_language()
        self.translations = self._load_translations(self.current_lang)

    def _detect_language(self):
        """Detect system language."""
        try:
            # Try to get system locale
            lang = locale.getdefaultlocale()[0]
            if lang:
                lang = lang.split("_")[0]
                # Check if we support this language
                if os.path.exists(os.path.join(self.locales_dir, f"{lang}.json")):
                    return lang
        except Exception:
            pass
        return "en"  # Default

    def _load_translations(self, lang):
        """Load translation file."""
        path = os.path.join(self.locales_dir, f"{lang}.json")
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading translations for {lang}: {e}")
            if lang != "en":
                return self._load_translations("en")
            return {}

    def get_translations(self):
        """Return all translations for the current language."""
        return self.translations

    def set_language(self, lang):
        """Manually change the language."""
        if os.path.exists(os.path.join(self.locales_dir, f"{lang}.json")):
            self.current_lang = lang
            self.translations = self._load_translations(lang)
            return True
        return False
