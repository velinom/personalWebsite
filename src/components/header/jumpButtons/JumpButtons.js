import React from 'react';
import './JumpButtons.css';

export default class JumpButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: props.width };
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  render() {
    return (
      <div className={"header-jumpButtonBox " + this.state.width}>
        <div className="header-jumpButton">ABOUT</div>
        <div className="header-jumpButton">SKILLS</div>
        <div className="header-jumpButton">EXPERIENCE</div>
        <div className="header-jumpButton">CONTACT</div>
      </div>
    );
  }
}