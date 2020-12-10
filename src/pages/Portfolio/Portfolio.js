import React, { useState, useRef } from 'react';
import Gallery from 'react-photo-gallery';
import { getPhotos } from './photos.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';

const Portfolio = ({
  photoGroup
}) => {

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const sliderRef = useRef(null);

  const {thumbnails, images} = getPhotos(photoGroup);

  return (
    !galleryOpen ? (
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
      </div>
    ) : (
      <React.Fragment>
        <Slider ref={sliderRef}
                dots={false}
                draggable={true}
                swipe={true}
                infinite={true}
                speed={750}
                adaptiveHeight={false}
                variableWidth={true}
                centerMode={true}
                slidesToShow={1}
                slidesToScroll={1}
                initialSlide={photoIndex}
        >
          {images.map((image, i) => (
            <img src={image}
                 onClick={() => sliderRef.current?.slickGoTo(i)}
            >
            </img>
          ))}

        </Slider>
        <button type="button" className="gallery-close close" aria-label="Close"
                onClick={() => setGalleryOpen(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </React.Fragment> 
    )
  );
}

export default Portfolio;
