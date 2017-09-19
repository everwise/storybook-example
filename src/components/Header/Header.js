import React from 'react';

import { Button } from '../Button';

import './Header.css';

const Header = ({ user }) => (
  <header className="Header">
    <a href="/">
      <img
        className="Header--logo"
        src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
        alt="logo"
      />
    </a>
    <Button
      onClick={() => console.log('button!')}
      className="Header--button"
      text="Login"
    />
  </header>
);

export default Header;
