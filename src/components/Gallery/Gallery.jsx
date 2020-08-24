import ImageGallery from 'react-image-gallery';
import React from 'react';
import PropTypes from 'prop-types';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import img from '../../data/gallery.json';

/**
 * This component creates the Gallery section
 * @param {Component} SectionTitle The style format to be used for section title
 */
const Gallery = ({ SectionTitle }) => (
  <div>
    <div id="Gallery" />
    <br />
    <br />
    <br />
    <SectionTitle>Photo Gallery</SectionTitle>
    <ImageGallery
      items={img}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav
      useBrowserFullscreen={false}
    />
  </div>
);

Gallery.propTypes = {
  SectionTitle: PropTypes.object.isRequired,
};

export default Gallery;
