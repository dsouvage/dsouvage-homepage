/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import WebsiteInfo from '../components/WebsiteInfo/WebsiteInfo';
import {
  SectionTitle, Paragraph,
} from '../styles';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<WebsiteInfo SectionTitle={SectionTitle} Paragraph={Paragraph} />);
});
