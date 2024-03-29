import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
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
      <div className={"contact-box " + this.state.width} id="contact">
        <div className={"contact-title " + this.state.width}>Contact</div>
        <div className={"contact-content"}>
          <a href="mailto:mark.velino@gmail.com" target="_blank">
            <div className={"contact-link " + this.state.width}>Email</div>
          </a>
          <a href="https://www.linkedin.com/in/mark-velino-a14144115" target="_blank">
            <div className={"contact-link " + this.state.width}>LinkedIn</div>
          </a>
        </div>
      </div>
    );
  }
}