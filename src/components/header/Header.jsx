import React from 'react';
import logo from '../../jsprojects.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='JSProjects Logo' />
    </div>
  );
};

export default Header;
