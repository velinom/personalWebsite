import React from 'react';
import Responsive from './behaviors/responsive/Responsive';
import Header from './components/header/Header';
import Pictures from './components/pictures/Pictures';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import './Website.css';

export default class Website extends React.Component {
  render() {
    return (
      <Responsive>
        <Header />
        <Welcome />
        <Pictures />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Responsive>
    );
  }
}
