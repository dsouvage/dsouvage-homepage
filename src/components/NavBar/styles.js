/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavBarStyle = styled.div`
  /* The navigation bar */
  .navbar {
    overflow: hidden;
    background-color: #333;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    opacity: 0.8;
    z-index: 9999;
  }

  /* Links inside the navbar */
  .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  /* Change background on mouse-over */
  .navbar a:hover {
    background: #ddd;
    color: black;
  }

  /* Main content */
  .main {
    margin-top: 30px; /* Add a top margin to avoid content overlay */
  }
`;
