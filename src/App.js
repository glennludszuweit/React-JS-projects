import React, { useState } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './App.css';

const App = (props) => {
  const [projects] = useState([
    {
      id: 11,
      image: require('./images/budgetapp.jpg'),
      title: 'Javascript Budget App',
      url: 'http://jsprojects.org/budgetapp/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/budgetapp',
    },
    {
      id: 10,
      image: require('./images/piggame.jpg'),
      title: 'Javascript Pig Game',
      url: 'http://jsprojects.org/piggame/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/piggame',
    },
    {
      id: 9,
      image: require('./images/loancalculator.jpg'),
      title: 'Javascript Loan Calculator',
      url: 'http://jsprojects.org/loancalculator/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/loancalculator',
    },
    {
      id: 8,
      image: require('./images/dicegame.jpg'),
      title: 'Javascript Dice Game',
      url: 'http://jsprojects.org/dicegame/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/dicegame',
    },
    {
      id: 7,
      image: require('./images/notemanager.jpg'),
      title: 'Javascript Note Manager',
      url: 'http://jsprojects.org/notemanager/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/notemanager',
    },
    {
      id: 6,
      image: require('./images/drumkit.jpg'),
      title: 'Javascript Drum Kit',
      url: 'http://jsprojects.org/drumkit/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/drumkit',
    },
    {
      id: 5,
      image: require('./images/simongame.jpg'),
      title: 'Javascript Simon Game',
      url: 'http://jsprojects.org/simongame/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/simongame',
    },
    {
      id: 4,
      image: require('./images/paperrockscissors.jpg'),
      title: 'Paper Rock Scissors',
      url: 'http://jsprojects.org/paperrockscissors/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/paperrockscissors',
    },
    {
      id: 3,
      image: require('./images/digitalclock.jpg'),
      title: 'Javascript Digital Clock',
      url: 'http://jsprojects.org/digitalclock/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/digitalclock',
    },
    {
      id: 2,
      image: require('./images/tasklists.jpg'),
      title: 'Javascript Task Lists',
      url: 'http://jsprojects.org/tasklists/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/tasklists',
    },
    {
      id: 1,
      image: require('./images/bookslist.jpg'),
      title: 'Javascript Books List',
      url: 'http://jsprojects.org/bookslist/',
      code:
        'https://github.com/glennludszuweit/small-js-projects/tree/master/bookslist',
    },
  ]);
  return (
    <div>
      <Header />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
