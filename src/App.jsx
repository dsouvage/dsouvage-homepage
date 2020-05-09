import React, { useState, useEffect } from 'react';
import Pages from './pages';

/* istanbul ignore next */
async function getResume(setUser) {
  const res = await fetch('https://gitconnected.com/v1/portfolio/firefelix');
  const data = await res.json();
  setUser(data);
}

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // grab resume items from gitconnected
    /* istanbul ignore next */
    getResume(setUser);
  }, []);
  /* istanbul ignore next */
  if (!user) {
    return <div />;
  }

  /* istanbul ignore next */
  return <Pages user={user} />;
}

export default App;
