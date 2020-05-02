/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Badges from '../../components/Badges/Badges';
import { Paragraph } from '../../styles';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<Badges Paragraph={Paragraph} />);
});
