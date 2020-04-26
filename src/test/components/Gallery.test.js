/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../../components/Gallery/Gallery';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<Gallery />);
});
