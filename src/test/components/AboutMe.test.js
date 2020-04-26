/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from '../../components/AboutMe/AboutMe';
import { SectionTitle, Paragraph } from '../../styles';

import user from '../test-user.json';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<AboutMe user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />);
});
