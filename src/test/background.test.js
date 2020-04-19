/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import BackgroundComponentStar from '../components/Background/background';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<BackgroundComponentStar />);
});
