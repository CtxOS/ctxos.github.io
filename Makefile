image:
	docker build -t website .

prepare: image
	docker run --rm -ti -v $(shell pwd):/website website yarn install

test: prepare
	docker run --rm -ti --network host -v $(shell pwd):/website website yarn dev

build: prepare
	docker run --rm -ti --network host -v $(shell pwd):/website website yarn next build
	docker run --rm -ti --network host -v $(shell pwd):/website website yarn next export -o _build

publish: build
	rclone sync --progress --delete-after _build/ linode-frankfurt:ctx-website/