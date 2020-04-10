/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Me from './Me';

async function getGitProfile() {
  const response = await fetch('https://gitconnected.com/v1/portfolio/firefelix');
  let data = await response.json();
  if (!data) {
    data = <div />;
  }
  return data;
}

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  getGitProfile().then((data) => shallow(<Me user={data} />));
});
