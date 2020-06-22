import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <main>
      <div className='cards'>
        <div className='card'>
          <div className='card__image-container'>
            <img
              src='https://images.unsplash.com/photo-1592779060393-204a83574bed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
              alt='sample'
            />
          </div>
          <div className='card__content'>
            <h4 className='card__title'>Rock Paper Scissors</h4>
            <div className='card__info'>
              <p className='card__info-project'>Live Project</p>
              <p className='card__info-code'>Source Code</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
