import ImageGallery from 'react-image-gallery';
import React from 'react';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const images = [
  {
    original: 'https://i.imgur.com/fZoc2bN.jpg/',
    thumbnail: 'https://i.imgur.com/fZoc2bN.jpg/',
  },
  {
    original: 'https://i.imgur.com/VFUbVwh.jpg',
    thumbnail: 'https://i.imgur.com/VFUbVwh.jpg/',
  },
  {
    original: 'https://i.imgur.com/5XOV00s.jpg',
    thumbnail: 'https://i.imgur.com/5XOV00s.jpg',
  },
  {
    original: 'https://i.imgur.com/kE5rvVH.jpg',
    thumbnail: 'https://i.imgur.com/kE5rvVH.jpg',
  },
  {
    original: 'https://i.imgur.com/yLBBam7.jpg',
    thumbnail: 'https://i.imgur.com/yLBBam7.jpg',
  },
  {
    original: 'https://i.imgur.com/686sqSS.jpg',
    thumbnail: 'https://i.imgur.com/686sqSS.jpg',
  },
];

const Gallery = () => (
  <div>
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav
      useBrowserFullscreen={false}
    />
    <div id="Gallery" />
  </div>
);

export default Gallery;
