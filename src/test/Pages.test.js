/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Pages from '../pages';

import user from './test-user.json';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<Pages user={user} />);
});
