/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../components/NavBar/NavBar';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<NavBar />);
});
