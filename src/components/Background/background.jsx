import React from 'react';
import Avatar from '../../data/SoloPic.jpg';
import { StarBackgroundTwo as StarBackground } from './styles';

/**
 * This component creates the Parallax Star Format for the landing page
 */
const BackgroundComponentStar = () => (
  <StarBackground>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
      type="text/css"
    />
    <div className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="title">
        <span>
          <img src={Avatar} alt="Avatar" className="avatar" />
        </span>
        <br />
        <br />
        <span>DYLAN SOUVAGE</span>
        <br />
        <span>STUDENT &amp;&amp; SOFTWARE ENGINEER</span>
      </div>
    </div>
  </StarBackground>
);

export default BackgroundComponentStar;
