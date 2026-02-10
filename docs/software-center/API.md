# Software Center API Specification

## D-Bus Interface

The CtxOS Software Center exposes its functionality via D-Bus for inter-process communication.

### Bus Name
`org.ctxos.SoftwareCenter`

### Object Path
`/org/ctxos/SoftwareCenter`

---

## Interfaces

### org.ctxos.PackageManager

Manages package installation, removal, and queries.

#### Methods

**ListPackages(filter: string) → (packages: Array[(string, string, uint32)])**
List available packages.

**Parameters:**
- `filter` (string): Search filter (empty for all packages)

**Returns:**
- Array of tuples: `(name, version, size_bytes)`

**Example:**
```python
packages = iface.ListPackages("python")
# [("python3", "3.11.2", 12345678), ("python3-dev", "3.11.2", 5678901), ...]
```

---

**GetPackageInfo(name: string) → (info: Dict)**
Get detailed package information.

**Parameters:**
- `name` (string): Package name

**Returns:**
- Dictionary with keys:
  - `name` (string): Package name
  - `version` (string): Version
  - `description` (string): Description
  - `size` (uint32): Size in bytes
  - `installed` (bool): Installation status
  - `dependencies` (Array[string]): Dependencies

**Example:**
```python
info = iface.GetPackageInfo("python3")
# {
#   "name": "python3",
#   "version": "3.11.2",
#   "description": "Interactive high-level object-oriented language",
#   "size": 12345678,
#   "installed": True,
#   "dependencies": ["python3-minimal", "libpython3.11"]
# }
```

---

**InstallPackage(name: string) → (success: bool)**
Install a package.

**Parameters:**
- `name` (string): Package name

**Returns:**
- `success` (bool): True if installation succeeded

**Errors:**
- `101` - Package not found
- `102` - Dependency error
- `103` - Install failed
- `100` - Permission denied

**Example:**
```python
try:
    success = iface.InstallPackage("python3-dev")
    print(f"Install result: {success}")
except dbus.exceptions.DBusException as e:
    print(f"Error: {e}")
```

---

**RemovePackage(name: string) → (success: bool)**
Remove a package.

**Parameters:**
- `name` (string): Package name

**Returns:**
- `success` (bool): True if removal succeeded

**Errors:**
- `101` - Package not found
- `104` - Remove failed
- `100` - Permission denied

---

**SearchPackages(query: string) → (results: Array[(string, string)])**
Search for packages.

**Parameters:**
- `query` (string): Search query

**Returns:**
- Array of tuples: `(name, description)`

---

#### Signals

**PackageInstalled(name: string, version: string)**
Emitted when a package is successfully installed.

**Parameters:**
- `name` (string): Package name
- `version` (string): Installed version

**Example:**
```python
def on_package_installed(name, version):
    print(f"Installed: {name} {version}")

iface.connect_to_signal("PackageInstalled", on_package_installed)
```

---

**PackageRemoved(name: string)**
Emitted when a package is removed.

**Parameters:**
- `name` (string): Package name

---

**InstallProgress(name: string, progress: uint32)**
Emitted during package installation.

**Parameters:**
- `name` (string): Package being installed
- `progress` (uint32): Progress percentage (0-100)

---

**ErrorOccurred(code: uint32, message: string)**
Emitted when an error occurs.

**Parameters:**
- `code` (uint32): Error code (see Error Codes section)
- `message` (string): Error message

---

### org.ctxos.SystemProfile

Manages system profiles.

#### Methods

**ListProfiles() → (profiles: Array[string])**
List available profiles.

**Returns:**
- Array of profile names

**Example:**
```python
profiles = iface.ListProfiles()
# ["base", "desktop", "server", "developer"]
```

---

**GetCurrentProfile() → (profile: string)**
Get the active profile.

**Returns:**
- Current profile name

---

**GetProfileInfo(name: string) → (info: Dict)**
Get profile details.

**Parameters:**
- `name` (string): Profile name

**Returns:**
- Dictionary with keys:
  - `name` (string): Profile name
  - `description` (string): Description
  - `modules` (Array[string]): Included modules
  - `packages` (Array[string]): Included packages

---

**SwitchProfile(name: string, snapshot: bool) → (success: bool)**
Switch to a different profile.

**Parameters:**
- `name` (string): Target profile name
- `snapshot` (bool): Create snapshot before switching

**Returns:**
- `success` (bool): True if switch succeeded

**Errors:**
- `101` - Profile not found
- `105` - Snapshot failed
- `100` - Permission denied

---

#### Signals

**ProfileSwitched(old_profile: string, new_profile: string)**
Emitted when profile is changed.

**Parameters:**
- `old_profile` (string): Previous profile
- `new_profile` (string): New profile

---

### org.ctxos.SnapshotManager

Manages system snapshots.

#### Methods

**CreateSnapshot(name: string, description: string) → (snapshot_id: string)**
Create a system snapshot.

**Parameters:**
- `name` (string): Snapshot name
- `description` (string): Description

**Returns:**
- `snapshot_id` (string): Unique snapshot ID

---

**ListSnapshots() → (snapshots: Array[(string, string, uint64)])**
List all snapshots.

**Returns:**
- Array of tuples: `(id, name, timestamp)`

---

**RestoreSnapshot(snapshot_id: string) → (success: bool)**
Restore from a snapshot.

**Parameters:**
- `snapshot_id` (string): Snapshot ID

**Returns:**
- `success` (bool): True if restore succeeded

---

**DeleteSnapshot(snapshot_id: string) → (success: bool)**
Delete a snapshot.

**Parameters:**
- `snapshot_id` (string): Snapshot ID

**Returns:**
- `success` (bool): True if deletion succeeded

---

## Error Codes

| Code | Name | Description |
|------|------|-------------|
| 100 | PERMISSION_DENIED | Insufficient permissions |
| 101 | PACKAGE_NOT_FOUND | Package does not exist |
| 102 | DEPENDENCY_ERROR | Dependency resolution failed |
| 103 | INSTALL_FAILED | Installation failed |
| 104 | REMOVE_FAILED | Removal failed |
| 105 | SNAPSHOT_FAILED | Snapshot operation failed |
| 106 | PROFILE_NOT_FOUND | Profile does not exist |
| 107 | NETWORK_ERROR | Network connectivity issue |
| 108 | DISK_FULL | Insufficient disk space |

---

## Example Usage

### Python

```python
import dbus

# Connect to system bus
bus = dbus.SystemBus()

# Get PackageManager interface
obj = bus.get_object('org.ctxos.SoftwareCenter', '/org/ctxos/SoftwareCenter')
pkg_mgr = dbus.Interface(obj, 'org.ctxos.PackageManager')

# Install package
try:
    success = pkg_mgr.InstallPackage('python3-dev')
    print(f"Install result: {success}")
except dbus.exceptions.DBusException as e:
    print(f"Error: {e}")

# List packages
packages = pkg_mgr.ListPackages("")
for name, version, size in packages:
    print(f"{name} {version} ({size} bytes)")

# Listen for signals
def on_installed(name, version):
    print(f"Installed: {name} {version}")

pkg_mgr.connect_to_signal("PackageInstalled", on_installed)
```

### JavaScript (Node.js with dbus-next)

```javascript
const dbus = require('dbus-next');

async function main() {
    const bus = dbus.systemBus();

    const obj = await bus.getProxyObject(
        'org.ctxos.SoftwareCenter',
        '/org/ctxos/SoftwareCenter'
    );

    const pkgMgr = obj.getInterface('org.ctxos.PackageManager');

    // Install package
    try {
        const success = await pkgMgr.InstallPackage('python3-dev');
        console.log(`Install result: ${success}`);
    } catch (err) {
        console.error(`Error: ${err}`);
    }

    // Listen for signals
    pkgMgr.on('PackageInstalled', (name, version) => {
        console.log(`Installed: ${name} ${version}`);
    });
}

main();
```

### Shell (using dbus-send)

```bash
# Install package
dbus-send --system --print-reply \
    --dest=org.ctxos.SoftwareCenter \
    /org/ctxos/SoftwareCenter \
    org.ctxos.PackageManager.InstallPackage \
    string:"python3-dev"

# List profiles
dbus-send --system --print-reply \
    --dest=org.ctxos.SoftwareCenter \
    /org/ctxos/SoftwareCenter \
    org.ctxos.SystemProfile.ListProfiles
```

---

## Authentication

All privileged operations require PolicyKit authentication. The user will be prompted for credentials if needed.

PolicyKit actions:
- `org.ctxos.packagemanager.install` - Install packages
- `org.ctxos.packagemanager.remove` - Remove packages
- `org.ctxos.systemprofile.switch` - Switch profiles
- `org.ctxos.snapshot.create` - Create snapshots
- `org.ctxos.snapshot.restore` - Restore snapshots

---

## Rate Limiting

To prevent abuse, the following rate limits apply:
- Package operations: 10 per minute
- Snapshot operations: 5 per hour
- Profile switches: 3 per hour

Exceeding limits will result in error code 109 (RATE_LIMIT_EXCEEDED).

---

## Versioning

This API follows semantic versioning. The current version is **1.0.0**.

Breaking changes will increment the major version and may require client updates.
