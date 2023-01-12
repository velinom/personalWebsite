import React from 'react';
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
      <div className={"skills-box " + this.state.width} id="skills" >
        <div className={"skills-title " + this.state.width}>Skills</div>
        <div className={"skills-content " + this.state.width}>
          <div id="skills-languages" className={"skills-list " + this.state.width}>
            <div className={"skills-header " + this.state.width}>Languages</div>
            <p>JavaScript</p>
            <p>Java</p>
            <p>SQL</p>
            <p>Python</p>
            <p>C#</p>
          </div>
          <div id="skills-languages" className={"skills-list " + this.state.width}>
            <div className={"skills-header " + this.state.width}>Software / Frameworks</div>
            <p>Git / Gitlab</p>
            <p>React</p>
            <p>Node.js</p>
            <p>MemSQL</p>
            <p>elasticsearch</p>
          </div>
          <div id="skills-webDev" className={"skills-list " + this.state.width}>
            <div className={"skills-header " + this.state.width}>AWS</div>
            <p>Step Functions</p>
            <p>Lambdas</p>
            <p>DynamoDB</p>
            <p>EventBridge</p>
          </div>
        </div>
      </div>
    );
  }
}