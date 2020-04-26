import ImageGallery from 'react-image-gallery';
import React from 'react';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import img from '../../data/gallery.json';

const Gallery = () => (
  <div>
    <ImageGallery
      items={img}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav
      useBrowserFullscreen={false}
    />
    <div id="Gallery" />
  </div>
);

export default Gallery;
