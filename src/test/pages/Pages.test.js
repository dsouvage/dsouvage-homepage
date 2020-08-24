/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Pages from '../../pages';

import user from '../test-user.json';

/**
 * Shallow loads the Pages page an ensures it renders without crashing
 */
const runPagesTest = it('renders without crashing', () => {
  shallow(<Pages user={user} />);
});
