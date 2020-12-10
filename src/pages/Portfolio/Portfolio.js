import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import GalleryView from '../../components/GalleryView/GalleryView.js';
import { getPhotos } from './photos.js';
import './Portfolio.css';

const Portfolio = ({
  photoGroup,
  isMobile
}) => {

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {thumbnails, images} = getPhotos(photoGroup);

  useEffect(() => {
    // Preload fullsize images
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    })
  })

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
      <Gallery photos={thumbnails}
                direction={"column"}
                onClick={isMobile
                  ? (evt, photo) => openGallery(photo.index)
                  : () => {}
                }
      />
    ) : (
      // Full Screen Gallery
      <GalleryView images={images}
                   initialIndex={photoIndex}
                   closeGallery={closeGallery}
                   onLoad={unfade}
      />
    )
  );
}

export default Portfolio;
