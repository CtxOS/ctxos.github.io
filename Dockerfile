# Start with a clean Debian Bookworm base
FROM debian:bookworm-slim

# Set environment variables for non-interactive installs
ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONPATH="/usr/lib/software-center:${PYTHONPATH}"

# Install core dependencies for the toolkit and Software Center
RUN apt-get update && apt-get install -y \
    python3-all \
    python3-pip \
    python3-gi \
    python3-pydbus \
    python3-webview \
    libadwaita-1-0 \
    flatpak \
    dbus \
    policykit-1 \
    build-essential \
    devscripts \
    debhelper \
    lsb-release \
    pciutils \
    && rm -rf /var/lib/apt/lists/*

# Create working directory
WORKDIR /app

# Copy the toolkit source into the container
COPY . /app/

# Install the software center locally for testing
RUN cd software-center && make install

# Expose a volume for generated artifacts (ISOs, .debs)
VOLUME /app/artifacts

# Default command: Start a shell or the software center service
# Note: GUI will require X11 forwarding from the host
CMD ["/usr/bin/python3", "/usr/lib/software-center/backend/daemon.py", "--service"]
