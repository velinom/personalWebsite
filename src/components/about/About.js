import React from 'react';
import './About.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      width: props.width
    };
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  render() {
    return (
      <div className={"about-box " + this.props.width}>
        <div className={"about-background " + this.state.width} id="picture-pond" />
        <div className={"about-content " + this.state.width}>
          About
        </div>
      </div>
    );
  }
}