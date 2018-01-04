import React from 'react';
import JumpButtons from './jumpButtons/JumpButtons';
import JumpMenu from './jumpMenu/JumpMenu';
import './Header.css';

export default class Header extends React.Component {
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
    let JumpToLinks = <JumpButtons width={this.state.width} />;
    if (this.state.width === 'xs') JumpToLinks = <JumpMenu width={this.state.width} />;

    return (
      <div className={"header-box " + this.state.width} style={this.state.hidden ? { top: '-50px' } : undefined}>
        {JumpToLinks}

        <a id="header-gitHubIcon" className="header-icon" title="GitHub"
           href="https://github.com/velinom" />
        <a id="header-linkedInIcon" className="header-icon" title="LinkedIn"
           href="https://www.linkedin.com/in/mark-velino-a14144115" />
      </div>
    );
  }
}