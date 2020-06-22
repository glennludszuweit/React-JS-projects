import React, { useState } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import './App.css';

const App = (props) => {
  const [projects] = useState([
    {
      id: 4,
      image: require('./images/paperrockscissors.jpg'),
      title: 'Paper Rock Scissors',
      url: 'http://jsprojects.org/paperrockscissors/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/PaperRockScissors',
    },
    {
      id: 3,
      image: require('./images/digitalclock.jpg'),
      title: 'Javascript Digital Clock',
      url: 'http://jsprojects.org/digitalclock/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/DigitalClock',
    },
    {
      id: 2,
      image: require('./images/tasklists.jpg'),
      title: 'Javascript Task Lists',
      url: 'http://jsprojects.org/tasklists/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/TaskList',
    },
    {
      id: 1,
      image: require('./images/bookslist.jpg'),
      title: 'Javascript Books List',
      url: 'http://jsprojects.org/bookslist/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/BooksList',
    },
  ]);
  return (
    <div>
      <Header />
      <Projects projects={projects} />
    </div>
  );
};

export default App;
