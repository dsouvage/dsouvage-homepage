import React, { useState, useEffect } from 'react';
import Pages from './pages';

/* istanbul ignore next */
function getResume(setUser) {
  fetch('https://gitconnected.com/v1/portfolio/firefelix')
    .then((res) => res.json())
    .then((updateUser) => {
      setUser(updateUser);
    });
}

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // grab resume items from gitconnected
    /* istanbul ignore next */
    getResume(setUser);
  }, []);
  if (!user) {
    return <div />;
  }

  /* istanbul ignore next */
  return <Pages user={user} />;
}

export default App;
