include tools/hashdeps/hashdeps.mk
# Makefile for Atelier Mistral photography site
# Author: Cameron Fyfe <cameron.j.fyfe@gmail>

# Tool that generates a set of sized .jpgs from one .jpg
IMG_TOOL_PATH = tools/image_gen
IMG_TOOL_PATH_RETURN = ../../
IMG_TOOL = $(IMG_TOOL_PATH)/target/release/image_gen

# Full sized .jpgs
ORIG_IMGS_DIR = public/assets/photos/originals
ORIG_IMGS = $(wildcard $(ORIG_IMGS_DIR)/*.jpg)
# Resized .jpgs
# TODO: make this list all sizes instead of just _w500
#       _w500 works by itself though for now assuming sets for each images are always generated togethor
RESIZED_IMGS_DIR = public/assets/photos/generated
RESIZED_IMGS = $(subst $(ORIG_IMGS_DIR),$(RESIZED_IMGS_DIR),$(addsuffix _w500.jpg,$(basename $(ORIG_IMGS))))
# Necessary hash files for image hash depencies
DEPHASHES = $(addprefix $(HASHDEPS_HASH_TREE_DIR)/,$(addsuffix .dephash,$(ORIG_IMGS)))
DEPHASHES += $(HASHDEPS_HASH_TREE_DIR)/$(IMG_TOOL).dephash

default: all

# uninvoked rule so make doesn't delete hashes
dephashes: $(DEPHASHES)

# Build image tool
$(IMG_TOOL): $(IMG_TOOL_PATH)/src/main.rs $(IMG_TOOL_PATH)/Cargo.toml
	cd $(IMG_TOOL_PATH) && cargo build --release

# Handle image dependencies with content hashes instead of timestamps since this is a long execution
# and we don't want to rerun just when source control updates timestamps
public/assets/photos/generated%_w500.jpg: $(call hash_deps,public/assets/photos/originals/%.jpg $(IMG_TOOL)) | $(RESIZED_IMGS_DIR)
	$(IMG_TOOL) $(ORIG_IMGS_DIR)/$*.jpg $(RESIZED_IMGS_DIR)

# Generates resized images from fullsize originals
images: $(RESIZED_IMGS)

npminstall:
	npm install

# Builds react app
webapp: npminstall images
	npm run build

all: webapp

clean:
	rm -rf $(RESIZED_IMGS_DIR)
	rm -rf $(HASHDEPS_HASH_TREE_DIR)

$(RESIZED_IMGS_DIR):
	mkdir $(RESIZED_IMGS_DIR)