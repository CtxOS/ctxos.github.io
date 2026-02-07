#!/usr/bin/env bash
# require-root.sh - Check for root privileges

if [[ $EUID -ne 0 ]]; then
   if command -v error &> /dev/null; then
       error "This script must be run as root"
   else
       echo "Error: This script must be run as root"
   fi
   exit 1
fi
