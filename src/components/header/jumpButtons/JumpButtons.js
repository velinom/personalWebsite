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
        <div className={"header-jumpButton " + this.state.width}>SKILLS</div>
        <div className={"header-jumpButton " + this.state.width}>EXPERIENCE</div>
        <div className={"header-jumpButton " + this.state.width}>PROJECTS</div>
        <div className={"header-jumpButton " + this.state.width}>CONTACT</div>
      </div>
    );
  }
}