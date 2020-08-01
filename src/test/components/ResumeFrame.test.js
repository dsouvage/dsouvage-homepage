/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import ResumeFrame from '../../components/Resume/ResumeFrame';
import { SectionTitle, Paragraph } from '../../styles';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<ResumeFrame SectionTitle={SectionTitle} Paragraph={Paragraph} />);
});
