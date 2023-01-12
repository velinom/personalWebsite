import React from 'react';
import './Welcome.css';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: props.width };
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  render() {
    let Greeting = 'Hello! My name is Mark';
    if (this.state.width ===  's' || this.state.width === 'xs' || this.state.width === 'xxs') 
      Greeting = <p>Hello!<br />My name is Mark</p>;

    return (
      <div className={"welcome-box " + this.state.width}>
        <div className={"welcome-text " + this.state.width} id="welcome-greeting">
          {Greeting}
          <div className={"welcome-text " + this.state.width} id="welcome-subtitle">
            I'm passionate about using technology to help the environment and local communities
          </div>
        </div>
    </div>
    );
  }
}