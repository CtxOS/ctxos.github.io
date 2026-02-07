# Software Center - CtxOS

A repository-aware software center focused on meta-packages and system profiles.

## Architecture

- **Backend (Python)**: Wraps APT/dpkg and manages system profiles.
- **Frontend (GTK4)**: Native Linux UI using `libadwaita`.
- **Frontend (Webview)**: Optional HTML/JS UI for rapid iteration.

## Directory Structure

- `backend/`: Core logic and providers.
- `frontend/gtk/`: GTK4 application.
- `web/`: Web-based UI.
- `assets/`: Icons and themes.

## Running the Backend CLI

To test the backend independently:

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)/software-center/backend
./software-center/backend/daemon.py list_featured
```

## Running the GTK Frontend

Requires `python3-gi`, `libadwaita-1`, and `gtk4`.

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)/software-center
python3 software-center/frontend/gtk/main.py
```

## Features

- **Repo-aware**: Prioritizes `ctxos-base-kit` repository.
- **Meta-package First**: Promotes system profiles (Desktop, Server, Dev).
- **Offline-friendly**: Uses local APT cache.
- **Modern UI**: Clean, Adwaita-based design and premium Webview.
- **Rich Metadata**: Integrated AppStream support for screenshots, license info, and detailed descriptions.
