import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import GalleryView from '../../components/GalleryView/GalleryView.js';
import { getPhotos } from './photos.js';
import './Portfolio.css';

const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
}

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
        renderImage={props => (
          <img
            alt=""
            src={props.photo.src}
            style={{
              display: "block",
              position: "absolute",
              margin: props.margin,
              top: props.top,
              left: props.left,
              height: props.photo.height,
              width: props.photo.width,
              cursor: "pointer"
            }}
            onMouseEnter={() => preloadImage(props.photo.src.replace("thumb", "full"))}
            onClick={isMobile
              ? undefined
              : (evt, photo) => openGallery(props.index)
            }
          />
        )}
      />
    ) : (
      // Full Screen Gallery
      <GalleryView
        images={images}
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
      />
    )
  );
}

export default Portfolio;
