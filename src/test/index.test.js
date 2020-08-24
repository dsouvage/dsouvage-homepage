/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// index.test.js
import Index from '../index.jsx';

/**
 * Ensures that index runs virtual dom and matches snapshot of working virtual dom
 */
const runIndexTest = it('renders without crashing', () => {
  expect(JSON.stringify({ ...Index, _reactInternalInstance: 'censored' })).toMatchSnapshot();
});
