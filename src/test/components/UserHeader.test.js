/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Router, Route } from 'react-router';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import UserHeader from '../../components/UserHeader/UserHeader';

import user from '../test-user.json';

const history = createMemoryHistory();

export const renderWithRouter = (Component) =>
  render(
    <Router history={history}>
      <Route component={Component} />
    </Router>
  );

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  // eslint-disable-next-line no-unused-vars
  const test = () => renderWithRouter(<UserHeader user={user} />);
});

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  shallow(<UserHeader user={user} />);
});
