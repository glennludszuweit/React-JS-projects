import React from 'react';
import jslogo from '../../jsprojects.png';
import Search from '../search/Search';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={jslogo} alt='JSProjects Logo' />
      <Search />
    </div>
  );
};

export default Header;
