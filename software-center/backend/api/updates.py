import threading
import time

from api.actions import ActionManager


class UpdateTracker:
    """Background service to monitor for system updates."""

    def __init__(self, callback):
        self.callback = callback
        self.actions = ActionManager()
        self.running = False
        self.thread = None

    def start(self, interval=3600):
        """Starts the background update checker."""
        self.running = True
        self.thread = threading.Thread(target=self._run, args=(interval,), daemon=True)
        self.thread.start()

    def stop(self):
        self.running = False

    def _run(self, interval):
        while self.running:
            try:
                # Update cache
                self.actions.update_cache()

                # Check for updates count (simplified for mock)
                # In real system: apt-get upgrade -s | grep "^Inst" | wc -l
                count = self._get_update_count()

                if count > 0:
                    self.callback(count)

            except Exception as e:
                print(f"[UpdateTracker] Error: {e}")

            time.sleep(interval)

    def _get_update_count(self):
        # Mocking update count for demo
        # In real life, we would parse apt output
        import random

        return random.randint(0, 5) if random.random() > 0.7 else 0
