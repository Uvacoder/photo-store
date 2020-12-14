# Makefile for Atelier Mistral photography site
# Author: Cameron Fyfe <cameron.j.fyfe@gmail>
default: all
include tools/hashdeps/hashdeps.mk

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

.PRECIOUS: %.dephash

# Build image tool
$(IMG_TOOL): $(call hash_deps,$(IMG_TOOL_PATH)/src/main.rs $(IMG_TOOL_PATH)/Cargo.toml)
	cd $(IMG_TOOL_PATH) && cargo build --release

# Handle image dependencies with content hashes instead of timestamps since this is a long execution
# and we don't want to rerun just when source control updates timestamps
$(RESIZED_IMGS_DIR)/%_w500.jpg: $(call hash_deps,$(ORIG_IMGS_DIR)/%.jpg $(IMG_TOOL)) | $(RESIZED_IMGS_DIR)
	$(IMG_TOOL) $(ORIG_IMGS_DIR)/$*.jpg $(RESIZED_IMGS_DIR)

# Generates resized images from fullsize originals
images: $(RESIZED_IMGS)

all: webapp

# Phony targts
.PHONY: npminstall webapp deploy-staging deploy-production clean

npminstall:
	npm install

# Builds react app
webapp: images npminstall
	npm run build

# Deployment tasks assume IAM credentials and region (us-west-2) are set
deploy-staging:
	aws s3 sync build s3://staging.atelier-mistral.com --delete
	aws cloudfront create-invalidation --distribution-id E3S4WMILP7S81C --paths "/*"

deploy-production:
	aws s3 sync build s3://atelier-mistral.com --delete
	aws cloudfront create-invalidation --distribution-id EG9IJEHT3X1J2 --paths "/*"

clean:
	rm -rf $(RESIZED_IMGS_DIR)
	rm -rf $(HASHDEPS_HASH_TREE_DIR)
	rm -rf node_modules
	rm -rf build

# Folders
$(RESIZED_IMGS_DIR):
	mkdir $(RESIZED_IMGS_DIR)
