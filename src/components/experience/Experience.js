import React from 'react';
import ReactDOM from 'react-dom';
import './Experience.css';

export default class Experience extends React.Component {
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
      <div className={"experience-box " + this.state.width}>
        <div className={"experience-background " + this.state.width} 
             style={{ backgroundPosition: this.state.backgroundPosition}} />
        <div className="experience-backgroundMask" />
        <div className={"experience-content " + this.state.width}>
          <div className={"experience-title " + this.state.width}>
            Experience
          </div>
        </div>
      </div>
    );
  }
}