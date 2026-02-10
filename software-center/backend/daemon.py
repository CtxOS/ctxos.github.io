#!/usr/bin/env python3
import argparse
import json

from api.actions import ActionManager
from api.apps import AppManager


class SoftwareCenterDaemon:
    def __init__(self):
        self.apps = AppManager()
        self.actions = ActionManager()

    def handle_request(self, request):
        """Processes a JSON request and returns a JSON response."""
        action = request.get("action")
        params = request.get("params", {})

        if action == "list_featured":
            return self.apps.get_featured_apps()
        elif action == "list_all":
            return self.apps.get_all_apps()
        elif action == "get_details":
            return self.apps.get_app_details(params.get("id"))
        elif action == "install":
            return self.actions.install(params.get("id"))
        elif action == "remove":
            return self.actions.remove(params.get("id"))
        elif action == "search":
            return self.apps.search_apps(params.get("query"))
        else:
            return {"error": "Unknown action"}


def cli_interface():
    daemon = SoftwareCenterDaemon()
    parser = argparse.ArgumentParser(description="Software Center Backend CLI")
    parser.add_argument(
        "action",
        help="Action to perform (list_featured, list_all, get_details, install, remove, search)",
    )
    parser.add_argument("--id", help="Package ID for details/install/remove")
    parser.add_argument("--query", help="Search query")

    args = parser.parse_args()

    request = {"action": args.action, "params": {"id": args.id, "query": args.query}}

    result = daemon.handle_request(request)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    cli_interface()
