import React from 'react';
import ReactDOM from 'react-dom';
import './Experience.css';

export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: props.width
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.ref = ReactDOM.findDOMNode(this);
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width)
      nextState.width = nextProps.width
  }

  onScroll(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    const ammountOnScreen = scrollTop + window.innerHeight - this.ref.offsetTop;
    if (ammountOnScreen >= 0) {
      const percentY = 0.5 -(ammountOnScreen * 0.5 / (this.ref.offsetHeight + window.innerHeight));
      const backgroundPosition = 'center ' + (percentY * 100) + '%';
      this.setState({ backgroundPosition })
    }
  }

  render() {
    return (
      <div className={"experience-box " + this.state.width}>
        <div className={"experience-background " + this.state.width} 
             style={{ backgroundPosition: this.state.backgroundPosition}} />
        <div className={"experience-backgroundMask " + this.state.width} />
        <div className={"experience-title " + this.state.width}>
            Experience
        </div>
        <div className={"experience-content " + this.state.width}>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              Power Advocate
            </div>
            <div className={"experience-discription " + this.state.width}>
              Developed a new version of an enterprise web application from the ground up. I worked on an
              efficient 4 person <u>Scrum</u> team to build a new database and backend structure 
              using <u>Oracle Database</u>, <u>SQL</u>, and <u>Java</u>. Created a sleak front-end for the 
              application using <u>React.js</u>, <u>Node.js</u>, and <u>JavaScript</u>.
            </div>
          </div>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              LiquiGlide
            </div>
            <div className={"experience-discription " + this.state.width}>
              Researched and Developed a new method of lining the insides of paint tanks to <u>increase 
              efficiency</u> by 4%.  Analyzed data from over 200 experiments that I carried out myself
              to identify key trends and assess financial value. 
            </div>
          </div>
        </div>
        <div className={"experience-title " + this.state.width}>
            Projects
        </div>
        <div className={"experience-content " + this.state.width}>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              Twiter Bot
            </div>
            <div className={"experience-discription " + this.state.width}>
              Developed a Twitter bot during the holiday season that analyzed tweets to determine if
              more people were tweeting about the holidays or about Christmas. Used the <u>Twitter API</u>
              , <u>Node.js</u>, <u>Heroku</u>, and <u>JavaScript</u> to colect data, analyze it, 
              and report out every 12 hours. 
            </div>
          </div>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              Project Karman 
            </div>
            <div className={"experience-discription " + this.state.width}>
              Work on a small <u>avionics</u> team with the goal of launching a rocket to the Karman Line (100 km). 
              Write embedded dirivers in <u>C</u> and perfrom QA testing on integrated circuit boards. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}