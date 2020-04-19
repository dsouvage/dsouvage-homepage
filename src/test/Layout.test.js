/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../components/Layout/Layout';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<Layout />);
});
