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
        <div className={"about-imgWrapper " + this.state.width}>
          <img className={"about-background " + this.state.width} src={picture}/>
        </div>
        <div className={"about-backgroundMask " + this.state.width} />
        <div className={"about-content " + this.state.width}>
          <div className="about-title">About</div>
          <p className={"about-description " + this.state.width}>
            For the past three years I have gained invaluable experience as a full stack web developer. I 
            am currently looking for new work that will allow me to leave a mark on the world for the better. 
            I believe that software and technology can be used to shape a brighter future, and I hope to join
            a team of like minded people with strong morals.
          </p>
          <p className={"about-description " + this.state.width}>
            Before my time working as a professional web developer I attended Northeastern University where
            I received a BS in computer science and physics. I loved my time at the university and the variety
            of classes I was able to take, including everything from game AI to thermodynamics. I also fell in
            love with Boston during college, and I have lived close to the city ever since. 
          </p>
          <p className={"about-description " + this.state.width}>
            During my free time I enjoy rock climbing, cooking, and playing chess. 
          </p>
        </div>
      </div>
    );
  }
}