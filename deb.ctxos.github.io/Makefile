SHELL := /bin/bash

.PHONY: all packages repository verify clean

all: packages repository

packages:
	./scripts/build-packages.sh

repository:
	./scripts/build-repository.sh

verify:
	./scripts/verify.sh

clean:
	rm -rf build/*
	rm -rf public/dists
	rm -rf public/pool
