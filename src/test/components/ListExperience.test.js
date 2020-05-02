/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import { Paragraph } from '../../styles';
import ListExperience from '../../components/ListExperience/ListExperience';
import { WorkTitle, JobTitle } from '../../style/Work/styles';
import user from '../test-user.json';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const work = user.work[0];
  shallow(
    <ListExperience work={work} Paragraph={Paragraph} WorkTitle={WorkTitle} JobTitle={JobTitle} />
  );
});
