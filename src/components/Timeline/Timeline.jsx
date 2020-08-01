import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ SectionTitle, Paragraph }) => (
  <>
    <div id="Timeline" />
    <SectionTitle>My Career Timeline</SectionTitle>
    <Paragraph>
      <iframe
        title="Career History"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1rc11f-oTfxTGx1i9_fv6gi3XwlJi762h44eQROLTGVs&font=Default&lang=en&initial_zoom=2&height=650"
        width="100%"
        height="650"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
        frameBorder="0"
      />
    </Paragraph>
  </>
);

Timeline.propTypes = {
  Paragraph: PropTypes.object.isRequired,
  SectionTitle: PropTypes.object.isRequired,
};

export default Timeline;
