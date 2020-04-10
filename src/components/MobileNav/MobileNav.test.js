import React from 'react';
import MobileNav from './MobileNav';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<MobileNav />);
});
