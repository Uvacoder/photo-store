import React, { useState, useEffect } from 'react';
import { GridImage, SlideshowImage, GalleryView } from '../../components';
import Gallery from 'react-photo-gallery';
import { getPhotos } from './photos.js';
import { preloadImage } from '../../logic/util';
import './Portfolio.css';

const Portfolio = ({
  photoGroup,
  isMobile
}) => {
  
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {thumbnails, images} = getPhotos(photoGroup);

  // Preload all fullsize images
  // TODO: remove once images layout in slider view doesn't get messed up by smart loading
  useEffect(() => images.forEach(img => (new Image()).src = img));

  const fade = () => document.body.className += ' fade';
  const unfade = () => document.body.className = document.body.className.replace(' fade', '');

  const openGallery = index => {
    fade();
    setTimeout(() => {
      setPhotoIndex(index);
      if (!galleryOpen) {
        setGalleryOpen(true);
      }
    }, 200);
  }

  const closeGallery = () => {
    fade();
    setTimeout(() => {
      setGalleryOpen(false);
      setTimeout(() => {
        unfade();
      }, 100);
    }, 200);
  }

  return (
    <React.Fragment>
      {/* Photo Grid */}
      <Gallery 
        photos={thumbnails}
        direction={"column"}
        columns={w => Math.ceil(w/500)}
        renderImage={(props) => <GridImage {...props} isMobile={isMobile} openGallery={openGallery} />}
      />
      {/* Full Screen Slide Show Gallery */}
      {galleryOpen &&
        <GalleryView
          initialIndex={photoIndex}
          closeGallery={closeGallery}
          onLoad={unfade}
          onSlideChange={(curSlide, nextSlide) => {
            const arrLen = images.length;
            for (var i=1; i<=2; i++) {
              preloadImage(images[ (nextSlide + i)          % arrLen ]);
              preloadImage(images[ (nextSlide + arrLen - i) % arrLen ]);
            }
          }}
        >
          {images.map((image => <SlideshowImage src={image} />))}
        </GalleryView>
      }
    </React.Fragment>
  );
}

export default Portfolio;
