#!/usr/bin/env bash
# Error handling standards for CtxOS

# Define exit codes
readonly EXIT_OK=0              # Success
readonly EXIT_GENERAL=1         # General error
readonly EXIT_INVALID_ARG=2     # Invalid arguments
readonly EXIT_NOT_FOUND=3       # File/package not found
readonly EXIT_PERMISSION=4      # Permission denied
readonly EXIT_TIMEOUT=5         # Timeout
readonly EXIT_DEPENDENCY=6      # Missing dependency
readonly EXIT_CONFIG=7          # Configuration error
readonly EXIT_NETWORK=8         # Network error

# Global error state
declare -g ERROR_CONTEXT=""
declare -g ERROR_CODE=0
declare -g ERROR_DETAILS=""

# Set context for errors
set_error_context() {
    ERROR_CONTEXT="$1"
}

# Exit with error message and code
error_exit() {
    local code="$1"
    local message="$2"
    local details="${3:-}"

    error "[${ERROR_CONTEXT}] ${message}"
    [[ -n "$details" ]] && error "Details: $details"
    exit "$code"
}

# Validate command exists
require_command() {
    local cmd="$1"
    if ! command -v "$cmd" &> /dev/null; then
        error_exit "$EXIT_DEPENDENCY" \
            "Required command not found: $cmd" \
            "Install via: apt-get install $cmd"
    fi
}

# Validate file exists
require_file() {
    local file="$1"
    if [[ ! -f "$file" ]]; then
        error_exit "$EXIT_NOT_FOUND" \
            "Required file not found: $file"
    fi
}

# Check permission level
require_root() {
    if [[ $EUID -ne 0 ]]; then
        error_exit "$EXIT_PERMISSION" \
            "This script must be run as root"
    fi
}

# Execute with error context
execute_safe() {
    local context="$1"
    shift

    set_error_context "$context"
    if ! "$@"; then
        local exit_code=$?
        error_exit "$exit_code" \
            "Failed to execute: $*" \
            "Context: $context"
    fi
}

# Trap errors automatically
trap 'error_exit "$?" "Unhandled error at line $LINENO in ${BASH_SOURCE[1]}"' ERR
