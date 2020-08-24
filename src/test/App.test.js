/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

/**
 * Ensures that app can render without crashing
 */
const runAppTest = it('renders without crashing', () => {
  shallow(<App />);
});
