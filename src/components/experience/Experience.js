import React from 'react';
import picture from './iceland2.JPG';
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
  /*
   

     power advocate section: i feel like you can use a better word than "work with", maybe use? code? incorporate into their programs/stories
  
  */

  render() {
    return (
      <div className={"experience-box " + this.state.width} id="experience">
        <div className={"experience-imgWraper " + this.state.width}>
          <img className={"experience-background " + this.state.width} src={picture}/>
        </div>
        <div className={"experience-backgroundMask " + this.state.width} />
        <div className={"experience-title " + this.state.width}>
            Experience
        </div>
        <div className={"experience-content " + this.state.width}>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              Wood Mackenzie
            </div>
            <div className={"experience-discription " + this.state.width}>
              My prior company PowerAdvocate was merged with Wood Mackenzie in early 2022 and I was selected
              to lead an integrated team of former PowerAdvocate and Wood Mackenzie employees. I worked hard
              with the team to adapt to a new environment and way of working. Within a few weeks
              myself and the rest of the team were completing stories and making contributions throughout
              the new code base.  
            </div>
          </div>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              Power Advocate
            </div>
            <div className={"experience-discription " + this.state.width}>
              I worked for several years as a full stack web developer at PowerAdvocate. One major project 
              I completed was to create a new <u>node.js</u> microservice that allowed the creation of different
              products and the customization of those products by users or company reps. As part of this project
              I also re-created the old <u>EXT.js</u> header for the website in <u>React</u>, modernizing the 
              code and making it easier for future developers to use. 
              <br/>
              <br/>
              A second major project I am proud 
              of is working to create a system of cached data pipelines in the cloud. This system used lots
              of AWS services including <u>Step Functions</u> to track what needed to be done for each pipeline,
              and <u>Lambdas</u> to make calls to our internal microservices. Once completed this project saved 
              Dev Ops employees from doing countless manual work that was now automated. 
            </div>
          </div>
        </div>
        <div className={"experience-title " + this.state.width}>
            Projects
        </div>
        <div className={"experience-content " + this.state.width}>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header no-ul " + this.state.width}>
              <a href="https://twitter.com/xmaswardata" target="blank">Twiter Bot</a>
            </div>
            <div className={"experience-discription " + this.state.width}>
              Developed a <a href="https://twitter.com/xmaswardata" target="blank">Twitter bot</a> during the 
              holiday season that analyzed tweets to determine if more people were tweeting about the 
              holidays or about Christmas. I Used the <u>Twitter API</u>, <u>Node.js</u>, <u>Heroku</u>, 
              and <u>JavaScript</u> to collect data, analyze it, and report out every 12 hours. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}