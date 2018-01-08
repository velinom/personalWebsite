import React from 'react';
import Header from './components/header/Header';
import Pictures from './components/pictures/Pictures';
import Welcome from './components/welcome/Welcome';
import Responsive from './behaviors/responsive/Responsive';
import './Website.css';

export default class Website extends React.Component {
  render() {
    return (
      <Responsive>
        <Header />
        <Pictures />
        <Welcome />
        <div style={{ height: '1000px', width: '100%', backgroundColor: 'grey' }} />
      </Responsive>
    );
  }
}
