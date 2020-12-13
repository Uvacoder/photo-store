import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GalleryView.css';

const GalleryView = ({
  children,
  initialIndex,
  closeGallery,
  onLoad,
  onSlideChange,
}) => {

  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      onLoad();
    }, 100);
  });

  return (
    <React.Fragment>
      <Slider ref={sliderRef}
              dots={false}
              arrows={false}
              draggable={true}
              swipe={true}
              infinite={true}
              speed={750}
              variableWidth={true}
              centerMode={true}
              slidesToShow={1}
              slidesToScroll={1}
              initialSlide={initialIndex}
              beforeChange={onSlideChange}
      >
        {React.Children.toArray(children).map((c, i) => React.cloneElement(c, {
          ...c.props, onClick:() => sliderRef.current?.slickGoTo(i)
        }))}
      </Slider>
      <button type="button" className="gallery-close close" aria-label="Close"
              onClick={closeGallery}>
        <span aria-hidden="true">&times;</span>
      </button>
    </React.Fragment>
  );
}
  
export default GalleryView;