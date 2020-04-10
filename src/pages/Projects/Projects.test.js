import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import { shallow } from 'enzyme';

async function getGitProfile() {
	const response = await fetch('https://gitconnected.com/v1/portfolio/firefelix');
	const data = await response.json();
	if (!data) {
		data = <div />;
	}
	return data;
}

it('renders without crashing', () => {
	getGitProfile().then((data) => shallow(<Projects user={data} />));
});
