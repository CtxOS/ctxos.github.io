/**
 * API Client Bridge
 * Handles communication between the Web UI and the Python Backend.
 */
const API = {
    async fetch(action, params = {}) {
        console.log(`[UI] Calling ${action}`, params);

        // Use pywebview bridge if available
        if (window.pywebview && window.pywebview.api) {
            try {
                return await window.pywebview.api.call_backend(action, params);
            } catch (err) {
                console.error("Bridge Error:", err);
                return { success: false, error: err.message };
            }
        }

        // Fallback for browser-only development (simulating bridge)
        return new Promise(resolve => {
            setTimeout(() => {
                if (action === 'list_featured') {
                    resolve([
                        { id: 'debian-base-desktop', name: 'Desktop Environment', type: 'profile', icon: '🖥️', description: 'Full desktop stack', installed: false },
                        { id: 'debian-base-server', name: 'Server Base', type: 'profile', icon: '☁️', description: 'Minimal server environment', installed: false },
                        { id: 'debian-base-dev', name: 'Development Stack', type: 'profile', icon: '🛠️', description: 'Development tools', installed: true }
                    ]);
                } else if (action === 'get_details') {
                    resolve({
                        id: params.id,
                        name: params.id.split('-').pop().toUpperCase(),
                        repo: 'ctxos-base-kit',
                        description: `Detailed view for ${params.id}. This is a critical system profile for CtxOS.`,
                        version: '1.2.0-stable',
                        size: '512 MB',
                        installed: params.id === 'debian-base-dev'
                    });
                } else if (action === 'get_translations') {
                    resolve({
                        ui: { search_placeholder: "Search mocks...", featured_title: "Featured Mocks", updates_title: "Updates", settings_title: "Settings", migration_details: "Migration", switch_profile: "Switch", remove: "Remove", install: "Install", create_snapshot: "Snapshot...", apply_changes: "Applying...", protection_active: "Protected", protection_desc: "Auto-snapshot active", repo_primary: "Main Repo", repo_status: "Status", repo_priority: "Priority" },
                        alerts: { updates_available: "Updates!", updates_desc: "{count} updates found." }
                    });
                } else if (action === 'get_repo_status') {
                    resolve({ primary: "repo.mock.org", status: "online", priority_enforced: true });
                } else {
                    resolve({ success: true });
                }
            }, 300);
        });
    }
};
