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
        
        content = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=8)
        content.set_margin_all(16)
        
        icon_name = app_data.get("icon", "system-component-symbolic")
        icon = Gtk.Image.new_from_icon_name(icon_name)
        icon.set_pixel_size(64)
        content.append(icon)
        
        name_label = Gtk.Label(label=app_data["name"])
        name_label.add_css_class("title-4")
        name_label.set_wrap(True)
        content.append(name_label)
        
        status = "Installed" if app_data.get("installed") else "Available"
        status_label = Gtk.Label(label=status)
        status_label.add_css_class("caption")
        if app_data.get("installed"):
            status_label.add_css_class("success")
        content.append(status_label)
        
        self.set_child(content)

class SoftwareCenterApp(Adw.Application):
    def __init__(self):
        super().__init__(application_id='org.ctxos.SoftwareCenter',
                         flags=Gio.ApplicationFlags.FLAGS_NONE)

    def do_activate(self):
        self.win = Adw.ApplicationWindow(application=self)
        self.win.set_title("Software Center")
        self.win.set_default_size(1000, 750)

        self.content_stack = Adw.ViewStack()
        
        # Navigation
        self.nav_view = Adw.NavigationSplitView()
        self.sidebar_page = Adw.NavigationPage.new(self.create_sidebar(), "Sidebar")
        self.nav_view.set_sidebar(self.sidebar_page)
        self.nav_view.set_content(Adw.NavigationPage.new(self.content_stack, "Content"))

        # Pages
        self.content_stack.add_titled(self.create_home_page(), "home", "Home")
        self.content_stack.add_titled(self.create_details_page(), "details", "Details")
        
        self.win.set_content(self.nav_view)
        self.win.present()

    def create_sidebar(self):
        listbox = Gtk.ListBox()
        listbox.add_css_class("navigation-sidebar")
        
        items = [("Home", "go-home-symbolic", "home"), ("Profiles", "system-component-symbolic", "profiles")]
        for name, icon, sid in items:
            row = Adw.ActionRow(title=name)
            row.add_prefix(Gtk.Image.new_from_icon_name(icon))
            row.stack_id = sid
            listbox.append(row)
            
        listbox.connect("row-activated", lambda lb, row: self.content_stack.set_visible_child_name(row.stack_id))
        return listbox

    def create_home_page(self):
        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        header = Adw.HeaderBar()
        box.append(header)
        
        self.flowbox = Gtk.FlowBox(valign=Gtk.Align.START, max_children_per_line=4, selection_mode=0, homogeneous=True)
        self.load_featured()
        
        scroll = Gtk.ScrolledWindow(vexpand=True)
        scroll.set_child(self.flowbox)
        box.append(scroll)
        return box

    def load_featured(self):
        if HAS_DBUS:
            apps = json.loads(dbus_service.ListFeatured())
        else:
            apps = direct_apps.get_featured_apps()
            
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
        self.details_desc.set_label(app["description"])
        self.install_btn.app_id = app_id
        self.content_stack.set_visible_child_name("details")

    def create_details_page(self):
        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=20)
        box.set_margin_all(32)
        
        self.details_title = Gtk.Label(xalign=0)
        self.details_title.add_css_class("title-1")
        box.append(self.details_title)
        
        self.details_desc = Gtk.Label(xalign=0, wrap=True)
        box.append(self.details_desc)
        
        self.install_btn = Gtk.Button(label="Install", halign=Gtk.Align.START)
        self.install_btn.connect("clicked", self.on_install)
        box.append(self.install_btn)
        
        back = Gtk.Button(label="Back", halign=Gtk.Align.START)
        back.connect("clicked", lambda x: self.content_stack.set_visible_child_name("home"))
        box.append(back)
        
        return box

    def on_install(self, btn):
        if HAS_DBUS:
            dbus_service.Install(btn.app_id)
        else:
            direct_actions.install(btn.app_id)
        self.show_details(btn.app_id)

if __name__ == "__main__":
    app = SoftwareCenterApp()
    app.run(sys.argv)
