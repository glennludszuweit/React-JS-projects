import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <main>
      <div className='cards'>
        <div className='card'>
          <div className='card__image-container'>
            <a href='#'>
              <img
                src='https://images.unsplash.com/photo-1592779060393-204a83574bed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
                alt='sample'
              />
            </a>
          </div>
          <div className='card__content'>
            <h2 className='card__title'>Rock Paper Scissors</h2>
            <div className='card__info'>
              <p>
                <a className='card__info-project' href='#'>
                  Live Project
                </a>
              </p>
              <p className='card__info-code'>
                <a href='#'>Source Code</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
