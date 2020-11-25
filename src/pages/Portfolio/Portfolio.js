import React from 'react';
import Gallery from 'react-photo-gallery';
import { loadPhotos } from './photos.js';

const Portfolio = props => (
  <div style={{width: "100%"}}>
    <Gallery photos={loadPhotos(props.photoGroup)}
             direction={"column"}
    />
  </div>
);

export default Portfolio;
