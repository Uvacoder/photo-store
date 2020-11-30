import React from 'react';
import Gallery from 'react-photo-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { getPhotos } from './photos.js';

import GalleryModal from '../../components/GalleryModal/GalleryModal.js';

class Portfolio extends React.Component {

  constructor () {
    super();
    this.state = {
      galleryOpen: false,
      startIndex: 0
    };
  }

  openGallery() {
    this.setState({ galleryOpen: true });
  }

  closeGallery() {
    console.log("closeGallery()")
    this.setState({ galleryOpen: false });
  }

  handlePhotoGridClick(evt, photo) {
    this.setState({ startIndex: photo.index });
    if (!this.state.galleryOpen) {
      this.openGallery();
    }
  }

  render() {
    const photos = getPhotos(this.props.photoGroup);

    return (
      <div style={{width: "100%"}}>
        {/* Photo Grid */}
        <Gallery photos={photos.thumbnails}
                 direction={"column"}
                 onClick={(e, p) => this.handlePhotoGridClick(e, p)}
        />
        {/* Photo Gallery Modal */}
        <GalleryModal z-index={1}
                      photos={photos.fullsize}
                      isOpen={this.state.galleryOpen}
                      onOpen={() => this.openGallery()}
                      onClose={() => this.closeGallery()}
                      startIndex={this.state.startIndex}
        />
      </div>
    );
  }
}

export default Portfolio;
