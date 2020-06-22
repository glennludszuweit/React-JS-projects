import React, { useState } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import './App.css';

const App = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: require('./images/html.jpg'),
      title: 'HTML',
      url: 'https://glennludszuweit.de',
      code: 'https://glennludszuweit.de',
    },
    {
      id: 1,
      image: require('./images/jscrashcourse.jpg'),
      title: 'HTML',
      url: 'https://glennludszuweit.de',
      code: 'https://glennludszuweit.de',
    },
    {
      id: 1,
      image: require('./images/mapfilterreducesortJS.jpg'),
      title: 'HTML',
      url: 'https://glennludszuweit.de',
      code: 'https://glennludszuweit.de',
    },
    {
      id: 1,
      image: require('./images/mongodbcrashcourse.jpg'),
      title: 'HTML',
      url: 'https://glennludszuweit.de',
      code: 'https://glennludszuweit.de',
    },
    {
      id: 1,
      image: require('./images/multers3.jpg'),
      title: 'HTML',
      url: 'https://glennludszuweit.de',
      code: 'https://glennludszuweit.de',
    },
    {
      id: 1,
      image: require('./images/nodecrashcourse.jpg'),
      title: 'HTML',
      url: 'https://glennludszuweit.de',
      code: 'https://glennludszuweit.de',
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
