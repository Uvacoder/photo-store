import React, { useState, useEffect } from 'react';
import { FadeLoadImage, GridImage } from '../../components';
import Gallery from 'react-photo-gallery';
import { GalleryView } from '../../components';
import { getPhotos } from './photos.js';
import { preloadImage } from '../../util';
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
    !galleryOpen ? (
      // Photo Grid
      <Gallery 
        photos={thumbnails}
        direction={"column"}
        renderImage={(props) => <GridImage {...props} isMobile={isMobile} openGallery={openGallery} />}
      />
    ) : (
      // Full Screen Gallery
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
        {images.map((image => <FadeLoadImage src={image} />))}
      </GalleryView>
    )
  );
}

export default Portfolio;
