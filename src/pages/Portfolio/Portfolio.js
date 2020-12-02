import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import { getPhotos } from './photos.js';

import GalleryModal from '../../components/GalleryModal/GalleryModal.js';

const Portfolio = props => {

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const photos = getPhotos(props.photoGroup);

  return (
    <div style={{width: "100%"}}>
      {/* Photo Grid */}
      <Gallery photos={photos.thumbnails}
                direction={"column"}
                onClick={(evt, photo) => {
                  setStartIndex(photo.index);
                  if (!galleryOpen) {
                    setGalleryOpen(true);
                  }
                }}
      />
      {/* Photo Gallery Modal */}
      <GalleryModal z-index={1}
                    photos={photos.fullsize}
                    isOpen={galleryOpen}
                    onOpen={() => setGalleryOpen(true)}
                    onClose={() => setGalleryOpen(false)}
                    startIndex={startIndex}
      />
    </div>
  );
}

export default Portfolio;
