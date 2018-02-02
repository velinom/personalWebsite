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
        <div className="experience-backgroundMask" />
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
              efficient 4 person Scrum team to build a new database and backend structure using Oracle Database,
              SQL, and Java. Created a sleak front-end for the application using React.js, Node.js, and JavaScript
            </div>
          </div>
          <div className={"experience-item " + this.state.width}>
            <div className={"experience-header " + this.state.width}>
              LiquiGlide
            </div>
            <div className={"experience-discription " + this.state.width}>
              Researched and Developed a new method of lining the insides of paint tanks to increase 
              efficiency by 4%.  Analyzed data from over 200 experiments that I carried out myself
              to identify key trends and assess financial value. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}