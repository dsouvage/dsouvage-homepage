import React, { useState, useEffect } from 'react';
import Pages from './pages';

const portfolioURL = 'https://gitconnected.com/v1/portfolio/firefelix';

/**
 * This function takes the resume from gitconnected
 * @param {*} setUser Hook that is created in the app function
 */
async function getResume(setUser) {
  const res = await fetch(portfolioURL);
  const data = await res.json();
  setUser(data);
}

/**
 * Runs the main application, uses a hook to populate user from getResume
 */
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
