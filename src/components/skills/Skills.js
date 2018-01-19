import React from 'react';
import ReactDOM from 'react-dom';
import './Skills.css';

export default class Skills extends React.Component {
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
      <div className={"skills-box " + this.state.width} >
        <div className={"skills-title " + this.state.width}>Skills</div>
        <div className={"skills-content " + this.state.width}>
          <div id="skills-languages" className={"skills-list " + this.state.width}>
            <div className={"skills-header " + this.state.width}>Languages</div>
            <p>Java</p>
            <p>Python</p>
            <p>C#</p>
            <p>C</p>
            <p>SQL</p>
            <p>MATLAB</p>
          </div>
          <div id="skills-languages" className={"skills-list " + this.state.width}>
            <div className={"skills-header " + this.state.width}>Software</div>
            <p>Git / GitHub</p>
            <p>Oracle Database</p>
            <p>Arduino</p>
            <p>Gradle</p>
            <p>Microsoft Excel</p>
          </div>
          <div id="skills-webDev" className={"skills-list " + this.state.width}>
            <div className={"skills-header " + this.state.width}>Web-Dev</div>
            <p>React.js</p>
            <p>Node.js</p>
            <p>JavaScript (ES6)</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
      </div>
    );
  }
}