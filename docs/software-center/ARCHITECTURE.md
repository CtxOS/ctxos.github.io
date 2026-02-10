# Software Center Architecture

## High-Level Overview

The CtxOS Software Center is a modular package management system built on D-Bus with multiple backend providers.

```
┌─────────────────────────────────────────┐
│        Frontend (GTK4 / Webview)        │
│  - User interface                       │
│  - Package browsing                     │
│  - Profile management                   │
└────────────────────┬────────────────────┘
                     │ D-Bus
                     ▼
┌─────────────────────────────────────────────────┐
│  Backend Daemon (daemon.py)                     │
│  ┌──────────────────────────────────────────┐  │
│  │  Core Modules                            │  │
│  │  - ProfileManager                        │  │
│  │  - PackageManager                        │  │
│  │  - SnapshotManager                       │  │
│  └──────────────────────────────────────────┘  │
│           │              │              │      │
│           ▼              ▼              ▼      │
│  ┌─────────────┐ ┌──────────────┐ ┌────────┐ │
│  │ APT Provider│ │ Flatpak      │ │ Meta   │ │
│  │             │ │ Provider     │ │Package │ │
│  └─────────────┘ └──────────────┘ └────────┘ │
└──────────┬──────────────┬──────────────┬──────┘
           ▼              ▼              ▼
        ┌──────┐     ┌──────────┐   ┌──────┐
        │ APT  │     │ Flatpak  │   │ Meta │
        │ Repo │     │ Registry │   │ Data │
        └──────┘     └──────────┘   └──────┘
```

---

## Component Architecture

### Frontend Layer

**Technologies:**
- GTK4 for native desktop UI
- Webview for embedded web interface
- D-Bus client for backend communication

**Responsibilities:**
- Display package catalog
- Handle user interactions
- Show installation progress
- Manage profile selection
- Display system snapshots

**Key Files:**
```
software-center/
├── frontend/
│   ├── main.py              # Application entry point
│   ├── ui/
│   │   ├── main_window.py   # Main window
│   │   ├── package_view.py  # Package browser
│   │   └── profile_view.py  # Profile manager
│   └── webview/
│       ├── index.html       # Web interface
│       └── app.js           # Frontend logic
```

---

### Backend Layer

**Technologies:**
- Python 3.9+ with asyncio
- D-Bus (pydbus) for IPC
- PolicyKit for privilege escalation

**Responsibilities:**
- Manage package operations
- Handle profile switching
- Create/restore snapshots
- Coordinate package providers
- Emit progress signals

**Key Files:**
```
software-center/
├── backend/
│   ├── daemon.py            # Main daemon
│   ├── package_manager.py   # Package operations
│   ├── profile_manager.py   # Profile management
│   ├── snapshot_manager.py  # Snapshot operations
│   └── providers/
│       ├── base.py          # Base provider class
│       ├── apt.py           # APT provider
│       ├── flatpak.py       # Flatpak provider
│       └── meta.py          # Meta-package provider
```

---

## Module Responsibilities

### ProfileManager

Manages system profiles and module installation.

**Key Methods:**
```python
class ProfileManager:
    def list_profiles(self) -> List[str]:
        """List available profiles"""

    def get_current_profile(self) -> str:
        """Get active profile"""

    def switch_profile(self, name: str, snapshot: bool = True) -> bool:
        """Switch to different profile"""

    def get_profile_modules(self, name: str) -> List[str]:
        """Get modules for profile"""
```

**Data Flow:**
1. Load profiles from `profiles/*.mk`
2. Parse module dependencies
3. Validate module compatibility
4. Install modules in correct order
5. Track active profile state

---

### PackageManager

Coordinates package operations across providers.

**Key Methods:**
```python
class PackageManager:
    def search(self, query: str) -> List[Package]:
        """Search across all providers"""

    def get_info(self, name: str) -> Package:
        """Get package details"""

    def install(self, name: str) -> bool:
        """Install package"""

    def remove(self, name: str) -> bool:
        """Remove package"""

    def list_installed(self) -> List[Package]:
        """List installed packages"""
```

**Provider Selection:**
```python
def _select_provider(self, package_name: str) -> BaseProvider:
    """Select appropriate provider for package"""
    for provider in self.providers:
        if provider.can_handle(package_name):
            return provider
    raise PackageNotFoundError(package_name)
```

---

### SnapshotManager

Creates and manages system snapshots.

**Key Methods:**
```python
class SnapshotManager:
    def create(self, name: str, description: str) -> str:
        """Create snapshot, return ID"""

    def list(self) -> List[Snapshot]:
        """List all snapshots"""

    def restore(self, snapshot_id: str) -> bool:
        """Restore from snapshot"""

    def delete(self, snapshot_id: str) -> bool:
        """Delete snapshot"""
```

**Snapshot Strategy:**
- Uses filesystem snapshots (Btrfs/LVM)
- Stores package state metadata
- Includes configuration files
- Excludes user data by default

---

## Package Providers

All providers inherit from `BaseProvider`:

```python
from abc import ABC, abstractmethod
from typing import List, Optional

class Package:
    name: str
    version: str
    description: str
    size: int
    installed: bool
    dependencies: List[str]

class BaseProvider(ABC):
    @abstractmethod
    def search(self, query: str) -> List[Package]:
        """Search for packages"""
        pass

    @abstractmethod
    def get_info(self, name: str) -> Optional[Package]:
        """Get package information"""
        pass

    @abstractmethod
    def install(self, name: str) -> bool:
        """Install package"""
        pass

    @abstractmethod
    def remove(self, name: str) -> bool:
        """Remove package"""
        pass

    @abstractmethod
    def list_installed(self) -> List[Package]:
        """List installed packages"""
        pass

    @abstractmethod
    def can_handle(self, package_name: str) -> bool:
        """Check if provider can handle package"""
        pass
```

### APT Provider

Manages Debian packages via APT.

**Implementation:**
```python
class AptProvider(BaseProvider):
    def __init__(self):
        import apt
        self.cache = apt.Cache()

    def search(self, query: str) -> List[Package]:
        results = []
        for pkg in self.cache:
            if query.lower() in pkg.name.lower():
                results.append(self._to_package(pkg))
        return results

    def install(self, name: str) -> bool:
        pkg = self.cache[name]
        pkg.mark_install()
        self.cache.commit()
        return True
```

### Flatpak Provider

Manages Flatpak applications.

**Implementation:**
```python
class FlatpakProvider(BaseProvider):
    def search(self, query: str) -> List[Package]:
        # Use flatpak CLI or libflatpak
        result = subprocess.run(
            ['flatpak', 'search', query],
            capture_output=True, text=True
        )
        return self._parse_flatpak_output(result.stdout)
```

### Meta-Package Provider

Manages CtxOS module bundles.

**Implementation:**
```python
class MetaProvider(BaseProvider):
    def __init__(self):
        self.modules_dir = Path("modules")

    def search(self, query: str) -> List[Package]:
        results = []
        for module_dir in self.modules_dir.iterdir():
            if query.lower() in module_dir.name.lower():
                results.append(self._load_module(module_dir))
        return results
```

---

## Data Flow Examples

### Installing a Package

```
1. User clicks "Install" in UI
   ↓
2. Frontend → D-Bus → PackageManager.install(name)
   ↓
3. PackageManager → select provider
   ↓
4. Provider → check dependencies
   ↓
5. Provider → download package
   ↓ (emit progress signals)
6. Provider → install package
   ↓
7. Provider → return success
   ↓
8. Backend → emit PackageInstalled signal
   ↓
9. Frontend → update UI
```

### Switching Profiles

```
1. User selects profile in UI
   ↓
2. Frontend → D-Bus → ProfileManager.switch_profile(name, snapshot=True)
   ↓
3. ProfileManager → create snapshot (if requested)
   ↓
4. ProfileManager → load profile definition
   ↓
5. ProfileManager → calculate module diff
   ↓
6. ProfileManager → remove old modules
   ↓
7. ProfileManager → install new modules
   ↓ (emit progress for each module)
8. ProfileManager → update active profile
   ↓
9. Backend → emit ProfileSwitched signal
   ↓
10. Frontend → update UI
```

---

## State Management

### Profile State
```python
# Stored in /var/lib/ctxos/state.json
{
    "current_profile": "developer",
    "installed_modules": ["core", "networking", "python-dev"],
    "last_update": "2026-02-10T11:52:00Z"
}
```

### Package Cache
```python
# Cached in /var/cache/ctxos/packages.db (SQLite)
CREATE TABLE packages (
    name TEXT PRIMARY KEY,
    version TEXT,
    provider TEXT,
    installed BOOLEAN,
    install_date TIMESTAMP
);
```

### Snapshot Metadata
```python
# Stored in /var/lib/ctxos/snapshots/<id>/metadata.json
{
    "id": "snapshot-20260210-115200",
    "name": "Before profile switch",
    "description": "Automatic snapshot",
    "timestamp": "2026-02-10T11:52:00Z",
    "profile": "base",
    "packages": ["pkg1", "pkg2", ...],
    "size_bytes": 1234567890
}
```

---

## Error Handling

### Error Propagation
```python
class PackageError(Exception):
    def __init__(self, code: int, message: str):
        self.code = code
        self.message = message
        super().__init__(message)

# In provider
def install(self, name: str) -> bool:
    try:
        # ... installation logic ...
    except apt.cache.FetchFailedException:
        raise PackageError(107, "Network error")
    except apt.cache.LockFailedException:
        raise PackageError(100, "Permission denied")
```

### D-Bus Error Mapping
```python
# In daemon
try:
    result = package_manager.install(name)
except PackageError as e:
    # Emit error signal
    self.ErrorOccurred(e.code, e.message)
    raise dbus.exceptions.DBusException(e.message)
```

---

## Security

### PolicyKit Integration

```xml
<!-- /usr/share/polkit-1/actions/org.ctxos.softwarecenter.policy -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE policyconfig PUBLIC
 "-//freedesktop//DTD PolicyKit Policy Configuration 1.0//EN"
 "http://www.freedesktop.org/standards/PolicyKit/1/policyconfig.dtd">
<policyconfig>
  <action id="org.ctxos.packagemanager.install">
    <description>Install packages</description>
    <message>Authentication is required to install packages</message>
    <defaults>
      <allow_any>auth_admin</allow_any>
      <allow_inactive>auth_admin</allow_inactive>
      <allow_active>auth_admin_keep</allow_active>
    </defaults>
  </action>
</policyconfig>
```

### Privilege Separation

- Frontend runs as user
- Backend daemon runs as root
- PolicyKit enforces authentication
- All operations logged to syslog

---

## Performance Considerations

### Caching Strategy
- Package metadata cached for 1 hour
- Search results cached for 5 minutes
- Profile definitions cached until modified

### Async Operations
```python
async def install_package(self, name: str) -> bool:
    """Install package asynchronously"""
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(
        None, self._install_sync, name
    )
```

### Progress Reporting
```python
def install_with_progress(self, name: str):
    """Install with progress callbacks"""
    def progress_callback(percent):
        self.InstallProgress(name, percent)

    self.provider.install(name, progress_callback)
```

---

## Testing Strategy

### Unit Tests
```python
# tests/unit/test_package_manager.py
def test_install_package(mock_apt_provider):
    pm = PackageManager([mock_apt_provider])
    result = pm.install("test-package")
    assert result == True
    mock_apt_provider.install.assert_called_once()
```

### Integration Tests
```python
# tests/integration/test_profile_switch.py
def test_switch_profile(test_profile):
    pm = ProfileManager()
    result = pm.switch_profile("test", snapshot=False)
    assert result == True
    assert pm.get_current_profile() == "test"
```

### D-Bus Tests
```python
# tests/integration/test_dbus_api.py
def test_dbus_install():
    bus = dbus.SystemBus()
    obj = bus.get_object('org.ctxos.SoftwareCenter', '/')
    iface = dbus.Interface(obj, 'org.ctxos.PackageManager')
    result = iface.InstallPackage('test-pkg')
    assert result == True
```

---

## Deployment

### Systemd Service
```ini
# /etc/systemd/system/ctxos-software-center.service
[Unit]
Description=CtxOS Software Center Daemon
After=network.target

[Service]
Type=dbus
BusName=org.ctxos.SoftwareCenter
ExecStart=/usr/bin/ctxos-daemon
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

### Installation
```bash
# Install daemon
sudo cp backend/daemon.py /usr/bin/ctxos-daemon
sudo chmod +x /usr/bin/ctxos-daemon

# Install D-Bus config
sudo cp dbus/org.ctxos.SoftwareCenter.conf /etc/dbus-1/system.d/

# Install PolicyKit policy
sudo cp polkit/org.ctxos.softwarecenter.policy /usr/share/polkit-1/actions/

# Enable service
sudo systemctl enable ctxos-software-center
sudo systemctl start ctxos-software-center
```

---

## Future Enhancements

1. **Plugin System** - Allow third-party providers
2. **Rollback Support** - Automatic rollback on failure
3. **Parallel Installs** - Install multiple packages concurrently
4. **Delta Updates** - Download only changed files
5. **Offline Mode** - Install from local cache
6. **Metrics** - Track installation success rates
7. **Recommendations** - Suggest related packages

---

## References

- [D-Bus Specification](https://dbus.freedesktop.org/doc/dbus-specification.html)
- [PolicyKit Documentation](https://www.freedesktop.org/software/polkit/docs/latest/)
- [APT Python API](https://apt-team.pages.debian.net/python-apt/library/index.html)
- [Flatpak Documentation](https://docs.flatpak.org/)
