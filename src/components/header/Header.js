import React from 'react';
import './Header.css';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.scrollTop = 0;
    this.state = { width: props.width };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  handleScroll(event) {
    const newScrollTop = event.target.scrollingElement.scrollTop;
    this.setState({ hidden: newScrollTop > this.scrollTop });
    this.scrollTop = newScrollTop;
  }

  render() {
    return (
      <div className={"header-box " + this.props.width} style={this.state.hidden ? { top: '-50px' } : undefined}>
        <div className={"header-jumpButton " + this.props.width}>SKILLS</div>
        <div className={"header-jumpButton " + this.props.width}>EXPERIENCE</div>
        <div className={"header-jumpButton " + this.props.width}>PROJECTS</div>
        <div className={"header-jumpButton " + this.props.width}>CONTACT</div>

        <div id="header-gitHubIcon" className="header-icon" />
      </div>
    );
  }
}