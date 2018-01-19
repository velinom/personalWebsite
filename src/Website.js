import React from 'react';
import Responsive from './behaviors/responsive/Responsive';
import Header from './components/header/Header';
import Pictures from './components/pictures/Pictures';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import './Website.css';

export default class Website extends React.Component {
  render() {
    return (
      <Responsive>
        <Header />
        <Pictures />
        <Welcome />
        <About />
        <Skills />
        <div style={{ height: '4000px', width: '100%', backgroundColor: '#778c97' }} />
      </Responsive>
    );
  }
}
