import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
	const [ user, setUser ] = useState(null);
	useEffect(() => {
		// grab resume items from gitconnected
		fetch('https://gitconnected.com/v1/portfolio/firefelix').then((res) => res.json()).then((user) => {
			setUser(user);
		});
	}, []);

	if (!user) {
		return <div />;
	}

	return <Pages user={user} />;
}

export default App;
