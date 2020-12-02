import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { getPhotos } from './photos.js';

const Portfolio = ({
  photoGroup
}) => {

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {thumbnails, images} = getPhotos(photoGroup);

  const photoIndexNext = (photoIndex + 1) % images.length;
  const photoIndexPrevious = (photoIndex - 1 + images.length) % images.length;

  return (
    <div>
      {/* Photo Grid */}
      <Gallery photos={thumbnails}
                direction={"column"}
                onClick={(evt, photo) => {
                  setPhotoIndex(photo.index);
                  if (!galleryOpen) {
                    setGalleryOpen(true);
                  }
                }}
      />
      {/* Lightbox Gallery Popup */}
      {galleryOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[photoIndexNext]}
          prevSrc={images[photoIndexPrevious]}
          onCloseRequest={() => setGalleryOpen(false)}
          onMovePrevRequest={() => setPhotoIndex(photoIndexPrevious)}
          onMoveNextRequest={() => setPhotoIndex(photoIndexNext)}
        />
      )}
    </div>
  );
}

export default Portfolio;
