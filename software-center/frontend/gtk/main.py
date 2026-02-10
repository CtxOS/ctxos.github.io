import sys
import gi
import json
import os

gi.require_version('Gtk', '4.0')
gi.require_version('Adw', '1')

from gi.repository import Gtk, Adw, Gio, GObject

# Handle DBus connection
try:
    from pydbus import SessionBus
    bus = SessionBus()
    dbus_service = bus.get("org.ctxos.SoftwareCenter")
    HAS_DBUS = True
except Exception:
    HAS_DBUS = False
    # Fallback to direct import for development
    sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
    from backend.api.apps import AppManager
    from backend.api.actions import ActionManager
    direct_apps = AppManager()
    direct_actions = ActionManager()

class AppCard(Gtk.Button):
    def __init__(self, app_data):
        super().__init__()
        self.app_data = app_data
        self.add_css_class("flat")
        self.add_css_class("card")
        
        content = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=8)
        content.set_margin_all(16)
        
        icon_name = app_data.get("icon", "system-component-symbolic")
        icon = Gtk.Image.new_from_icon_name(icon_name)
        icon.set_pixel_size(48)
        content.append(icon)
        
        name_label = Gtk.Label(label=app_data["name"])
        name_label.add_css_class("title-4")
        name_label.set_ellipsize(3) # Pango.EllipsizeMode.END
        content.append(name_label)
        
        self.set_child(content)

class SoftwareCenterApp(Adw.Application):
    def __init__(self):
        super().__init__(application_id='org.ctxos.SoftwareCenter',
                         flags=Gio.ApplicationFlags.FLAGS_NONE)

    def do_activate(self):
        self.win = Adw.ApplicationWindow(application=self)
        self.win.set_title("CtxOS Software Center")
        self.win.set_default_size(1100, 800)

        # Main Layout
        self.main_box = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL)
        
        # Sidebar
        self.sidebar = self.create_sidebar()
        self.main_box.append(self.sidebar)
        
        # Content Area
        self.content_stack = Adw.ViewStack()
        self.content_stack.set_transition_type(Adw.ViewStackTransitionType.SLIDE_LEFT_RIGHT)
        
        self.home_page = self.create_home_page()
        self.content_stack.add_titled(self.home_page, "home", "Home")
        
        self.details_page = self.create_details_page()
        self.content_stack.add_titled(self.details_page, "details", "Details")
        
        self.main_box.append(self.content_stack)
        
        self.win.set_content(self.main_box)
        
        # Load CSS
        self.load_custom_css()
        
        self.win.present()

    def load_custom_css(self):
        css_provider = Gtk.CssProvider()
        css = """
        .card {
            background: alpha(@theme_bg_color, 0.4);
            border-radius: 12px;
            border: 1px solid alpha(@theme_fg_color, 0.1);
            transition: all 200ms ease;
        }
        .card:hover {
            background: alpha(@theme_selected_bg_color, 0.2);
            transform: translateY(-2px);
        }
        .title-gradient {
            background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }
        """
        css_provider.load_from_data(css.encode())
        Gtk.StyleContext.add_provider_for_display(
            self.win.get_display(), 
            css_provider, 
            Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        )

    def create_sidebar(self):
        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=10)
        box.set_size_request(240, -1)
        box.add_css_class("sidebar")
        box.set_margin_all(12)
        
        logo_box = Gtk.Box(spacing=12)
        logo = Gtk.Image.new_from_icon_name("ctxos")
        logo.set_pixel_size(32)
        logo_box.append(logo)
        
        title = Gtk.Label(label="CtxOS")
        title.add_css_class("title-2")
        logo_box.append(title)
        box.append(logo_box)
        
        listbox = Gtk.ListBox()
        listbox.add_css_class("navigation-sidebar")
        
        main_items = [
            ("Home", "go-home-symbolic", "home"),
            ("Security Stacks", "security-high-symbolic", "security"),
            ("System", "emblem-system-symbolic", "system"),
            ("Installed", "emblem-ok-symbolic", "installed")
        ]
        
        for name, icon, sid in main_items:
            row = Adw.ActionRow(title=name)
            row.add_prefix(Gtk.Image.new_from_icon_name(icon))
            row.sid = sid
            listbox.append(row)
            
        listbox.connect("row-activated", self.on_sidebar_activated)
        box.append(listbox)
        return box

    def on_sidebar_activated(self, lb, row):
        if row.sid == "home":
            self.load_featured()
            self.content_stack.set_visible_child_name("home")
        elif row.sid == "security":
            self.load_category("security")
            self.content_stack.set_visible_child_name("home")

    def create_home_page(self):
        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        
        header = Adw.HeaderBar()
        self.search_bar = Gtk.SearchEntry(placeholder_text="Search security tools...")
        self.search_bar.connect("activate", self.on_search)
        header.set_title_widget(self.search_bar)
        box.append(header)
        
        self.flowbox = Gtk.FlowBox(
            valign=Gtk.Align.START, 
            max_children_per_line=5, 
            min_children_per_line=2,
            selection_mode=0, 
            homogeneous=True,
            column_spacing=12,
            row_spacing=12
        )
        self.flowbox.set_margin_all(24)
        
        self.load_featured()
        
        scroll = Gtk.ScrolledWindow(vexpand=True)
        scroll.set_child(self.flowbox)
        box.append(scroll)
        return box

    def clear_flowbox(self):
        while True:
            child = self.flowbox.get_first_child()
            if not child: break
            self.flowbox.remove(child)

    def load_featured(self):
        self.clear_flowbox()
        if HAS_DBUS:
            apps = json.loads(dbus_service.ListFeatured())
        else:
            apps = direct_apps.get_featured_apps()
            
        for app in apps:
            card = AppCard(app)
            card.connect("clicked", lambda b: self.show_details(b.app_data["id"]))
            self.flowbox.append(card)

    def load_category(self, cat_id):
        self.clear_flowbox()
        if HAS_DBUS:
            # Note: ListAll category filter might not be implemented in DBus yet
            apps = json.loads(dbus_service.ListAll())
        else:
            apps = direct_apps.get_all_apps(category=cat_id)
            
        for app in apps:
            card = AppCard(app)
            card.connect("clicked", lambda b: self.show_details(b.app_data["id"]))
            self.flowbox.append(card)

    def on_search(self, entry):
        query = entry.get_text()
        self.clear_flowbox()
        if HAS_DBUS:
            apps = json.loads(dbus_service.Search(query))
        else:
            apps = direct_apps.search_apps(query)
            
        for app in apps:
            card = AppCard(app)
            card.connect("clicked", lambda b: self.show_details(b.app_data["id"]))
            self.flowbox.append(card)

    def show_details(self, app_id):
        if HAS_DBUS:
            app = json.loads(dbus_service.GetAppDetails(app_id))
        else:
            app = direct_apps.get_app_details(app_id)
            
        self.details_title.set_label(app["name"])
        self.details_desc.set_label(app.get("description", "No description available."))
        self.install_btn.app_id = app_id
        
        if app.get("installed"):
            self.install_btn.set_label("Remove")
            self.install_btn.add_css_class("destructive-action")
        else:
            self.install_btn.set_label("Install")
            self.install_btn.add_css_class("suggested-action")
            self.install_btn.remove_css_class("destructive-action")
            
        self.content_stack.set_visible_child_name("details")

    def create_details_page(self):
        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        header = Adw.HeaderBar()
        back = Gtk.Button.new_from_icon_name("go-previous-symbolic")
        back.connect("clicked", lambda x: self.content_stack.set_visible_child_name("home"))
        header.pack_start(back)
        box.append(header)

        inner = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=24)
        inner.set_margin_all(48)
        
        self.details_title = Gtk.Label(xalign=0)
        self.details_title.add_css_class("title-1")
        inner.append(self.details_title)
        
        self.details_desc = Gtk.Label(xalign=0, wrap=True)
        inner.append(self.details_desc)
        
        btn_box = Gtk.Box(spacing=12)
        self.install_btn = Gtk.Button(label="Install", halign=Gtk.Align.START)
        self.install_btn.set_size_request(120, 44)
        self.install_btn.connect("clicked", self.on_install)
        btn_box.append(self.install_btn)
        inner.append(btn_box)
        
        box.append(inner)
        return box

    def on_install(self, btn):
        self.install_btn.set_sensitive(False)
        self.install_btn.set_label("Working...")
        
        # In a real app, this would be async
        if HAS_DBUS:
            dbus_service.Install(btn.app_id)
        else:
            direct_actions.install(btn.app_id)
            
        self.install_btn.set_sensitive(True)
        self.show_details(btn.app_id)

if __name__ == "__main__":
    app = SoftwareCenterApp()
    app.run(sys.argv)
