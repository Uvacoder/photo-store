import React from 'react';
import Gallery from 'react-photo-gallery';
import { loadPhotos, PHOTOS_ALL } from './photos.js';

export const Portfolio = props => (
  <div style={{width: "100%"}}>
    <Gallery photos={loadPhotos(props.photoGroup)}
             direction={"column"}
    />
  </div>
);

export const PortfolioAll = () => (
  <div style={{width: "100%"}}>
    <Gallery photos={PHOTOS_ALL}
             direction={"column"}
    />
  </div>
);

export const Portfolio1 = () => (
  <div style={{width: "100%"}}>
    <Gallery photos={loadPhotos("va")}
             direction={"column"}
    />
  </div>
);

export const Portfolio2 = () => (
  <div style={{width: "100%"}}>
    <Gallery photos={loadPhotos("cp")}
             direction={"column"}
    />
  </div>
);

