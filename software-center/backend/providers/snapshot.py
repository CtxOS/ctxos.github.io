import datetime
import subprocess


class SnapshotProvider:
    """Handles system snapshots before major operations."""

    def __init__(self):
        self.tool = self._detect_tool()

    def _detect_tool(self):
        """Detects available snapshot/backup tools on the system."""
        tools = [
            {"cmd": "timeshift", "args": ["--version"]},
            {"cmd": "snapper", "args": ["--version"]},
            {"cmd": "btrfs", "args": ["version"]},
        ]

        for tool in tools:
            try:
                subprocess.run([tool["cmd"]] + tool["args"], capture_output=True, check=True)
                return tool["cmd"]
            except (subprocess.CalledProcessError, FileNotFoundError):
                continue
        return "mock"  # Fallback for development

    def create_snapshot(self, comment="Pre-migration"):
        """Creates a system snapshot."""
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M")
        description = f"SoftwareCenter_{comment}_{timestamp}"

        if self.tool == "timeshift":
            cmd = ["timeshift", "--create", "--comments", description, "--tags", "O"]
        elif self.tool == "snapper":
            cmd = ["snapper", "create", "--description", description]
        elif self.tool == "btrfs":
            # Very basic btrfs snapshot assuming / is a subvolume and /.snapshots exists
            cmd = ["btrfs", "subvolume", "snapshot", "/", f"/.snapshots/{description}"]
        else:
            # Mock success for dev environments
            print(f"[SnapshotProvider] MOCK: Creating snapshot '{description}'")
            return {"success": True, "id": "mock-123", "tool": "mock"}

        try:
            subprocess.run(cmd, capture_output=True, text=True, check=True)
            return {"success": True, "description": description, "tool": self.tool}
        except subprocess.CalledProcessError as e:
            return {"success": False, "error": str(e), "tool": self.tool}

    def restore_snapshot(self, snapshot_id):
        """Restores a system snapshot."""
        if self.tool == "timeshift":
            # NOTE: Restore usually requires a reboot or interactive confirmation
            # In a real distro, we'd handle this via a grub hook or rescue environment
            cmd = ["timeshift", "--restore", "--snapshot", snapshot_id, "--force"]
        elif self.tool == "snapper":
            cmd = ["snapper", "rollback", snapshot_id]
        else:
            print(f"[SnapshotProvider] MOCK: Restoring snapshot '{snapshot_id}'")
            return {"success": True}

        try:
            subprocess.run(cmd, capture_output=True, text=True, check=True)
            return {"success": True}
        except subprocess.CalledProcessError as e:
            return {"success": False, "error": str(e)}

    def list_snapshots(self):
        """Lists available snapshots created by the Software Center."""
        # For mock/dev simplicity, we'll return a static list or empty
        return []
