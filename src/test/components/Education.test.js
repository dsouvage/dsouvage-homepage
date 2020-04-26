/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Education from '../../components/Education/Education';
import { SectionTitle, Paragraph } from '../../styles';

import user from '../test-user.json';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<Education user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />);
});
