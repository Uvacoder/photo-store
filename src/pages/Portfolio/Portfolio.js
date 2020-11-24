import React from 'react';
import Gallery from 'react-photo-gallery';
// import Gallery from 'react-grid-gallery';
import { PHOTOS_ALL } from './photos.js';

const Portfolio = () => (
  <div style={{width: "100%"}}>
    <Gallery photos={loadImagesAll()}
             direction={"column"}
     />
    {/* <Gallery images={loadImagesAll()}
             enableImageSelection={false}
    /> */}
  </div>
)

function loadImagesAll() {
  return PHOTOS_ALL;
}

export default Portfolio;
