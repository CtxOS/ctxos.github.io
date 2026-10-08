PROFILE ?= base
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

.PHONY: all install uninstall module-% iso debs docs clean test lint help

all: install

install:
	@echo "▶ Installing profile: $(PROFILE)"
	@bash install.sh $(PROFILE)

uninstall:
	@echo "▶ Uninstalling profile: $(PROFILE)"
	@bash uninstall.sh $(PROFILE)

module-%:
	@bash modules/$*/install.sh

iso:
	@bash live-iso/build-iso.sh

debs:
	@bash packaging/build-debs.sh

docs:
	@python3 scripts/build-docs.py

test:
	@echo "▶ Running tests"
	@bash scripts/validate-artifacts.sh

lint:
	@echo "▶ Running shellcheck"
	@find . -name "*.sh" -exec shellcheck {} +

clean:
	@rm -rf build dist
	@find modules -name "*.log" -delete

help:
	@echo "Debian Base Kit Makefile"
	@echo ""
	@echo "Usage:"
	@echo "  make install         Install all modules"
	@echo "  make uninstall       Uninstall all modules"
	@echo "  make module-<name>   Install a specific module"
	@echo "  make iso             Build live ISO"
	@echo "  make debs            Build .deb packages"
	@echo "  make docs            Build documentation HTML"
	@echo "  make test            Validate build artifacts"
	@echo "  make lint            Run shellcheck on all scripts"
	@echo "  make clean           Clean build artifacts"
