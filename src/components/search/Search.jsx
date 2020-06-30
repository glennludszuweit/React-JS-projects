import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className='search-box'>
      <input
        type='search'
        className='search-bar'
        name='search'
        placeholder='Search project ...'
      />
    </div>
  );
};

export default Search;
