import React from 'react';
import picture from './iceland1.JPG';
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
      <div className={"about-box " + this.state.width} id="about">
        <div className={"about-imgWraper " + this.state.width}>
          <img className={"about-background " + this.state.width} src={picture}/>
        </div>
        <div className={"about-backgroundMask " + this.state.width} />
        <div className={"about-content " + this.state.width}>
          <div className="about-title">About</div>
          <p className={"about-description " + this.state.width}>
            I am currently looking for... 
          </p>
          <p className={"about-description " + this.state.width}>
            Thanks to Northeastern's Co-op program, I have gained valuable, real-life experience as a
            laboratory technician at LiquiGlide, a software developer at Power Advocate, and a developer at
            MORSE CORP. Having worked in both of my fields of study while on Co-op, I hope to combine my
            passion for both physics and computer science in my full time work.
          </p>
          <p className={"about-description " + this.state.width}>
            When I am not working hard in classes or on the job, I enjoy hiking and camping in my home state of
            New Hampshire and fawning over dogs.
          </p>
        </div>
      </div>
    );
  }
}