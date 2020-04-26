/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// index.test.js
import Index from '../index.jsx';

it('renders without crashing', () => {
  expect(JSON.stringify({ ...Index, _reactInternalInstance: 'censored' })).toMatchSnapshot();
});
