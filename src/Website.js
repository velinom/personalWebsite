import React from 'react';
import Responsive from './behaviors/responsive/Responsive';
import Header from './components/header/Header';
import Pictures from './components/pictures/Pictures';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import './Website.css';

export default class Website extends React.Component {
  render() {
    return (
      <Responsive>
        <Header />
        <Pictures />
        <Welcome />
        <About />
        <div style={{ height: '1000px', width: '100%', backgroundColor: 'grey' }} />
      </Responsive>
    );
  }
}
