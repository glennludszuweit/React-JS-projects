import React, { Component } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
