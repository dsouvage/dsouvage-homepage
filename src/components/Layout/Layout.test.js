import React from 'react';
import Layout from './Layout';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Layout />);
});
