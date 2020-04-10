import React from 'react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

const history = createMemoryHistory();

export const renderWithRouter = (Component) => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>,
);

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const test = () => renderWithRouter(<Sidebar />);
});
