# Makefile for Atelier Mistral photography site
# Author: Cameron Fyfe <cameron.j.fyfe@gmail>

# Tool that generates a set of sized .jpgs from one .jpg
IMG_TOOL_PATH = tools/image_gen
IMG_TOOL = $(IMG_TOOL_PATH)/target/release/image_gen

# Full sized .jpgs
ORIG_IMGS = $(wildcard public/assets/photos/originals/*.jpg)
# Resized .jpgs
# TODO: make this list all sizes instead of just _w200
#       _w200 works by itself though for now assuming sets for each images are always generated togethor
RESIZED_IMGS = $(subst originals/,,$(addsuffix _w200.jpg,$(basename $(ORIG_IMGS))))

default: all

# Build image tool
$(IMG_TOOL): $(IMG_TOOL_PATH)/src/main.rs $(IMG_TOOL_PATH)/Cargo.toml
	cargo build --release

# This makes all resized images but we just use 200 width as indicator for all
# assuming they alway all get generated togethor
public/assets/photos/%_w200.jpg: public/assets/photos/originals/%.jpg $(IMG_TOOL)
	$(IMG_TOOL) $< public/assets/photos

# Generates resized images from fullsize originals
images: $(RESIZED_IMGS)

npminstall:
	npm install

# Builds react app
webapp: npminstall images
	npm run build

all: webapp