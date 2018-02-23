import React from 'react';
import './JumpButtons.css';

export default class JumpButtons extends React.Component {
  constructor(props) {
    super(props);

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
  }

  onMenuButtonClick(section) {
    window.scrollTo(0, document.getElementById(section).offsetTop); 
  }

  render() {
    return (
      <div className="header-jumpButtonBox">
        <div className="header-jumpButton" onClick={() => this.onMenuButtonClick('about')}>
          ABOUT
        </div>
        <div className="header-jumpButton" onClick={() => this.onMenuButtonClick('skills')}>
          SKILLS
        </div>
        <div className="header-jumpButton" onClick={() => this.onMenuButtonClick('experience')}>
          EXPERIENCE
        </div>
        <div className="header-jumpButton" onClick={() => this.onMenuButtonClick('contact')}>
          CONTACT
        </div>
      </div>
    );
  }
}