import React from 'react';
import JumpButtons from './jumpButtons/JumpButtons';
import JumpMenu from './jumpMenu/JumpMenu';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.scrollTop = 0;
    this.state = { width: props.width };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  onScroll(event) {
    const newScrollTop = event.target.scrollingElement.scrollTop;
    this.setState({ hidden: newScrollTop > this.scrollTop });
    this.scrollTop = newScrollTop;
  }

  render() {
    let JumpToLinks = <JumpButtons width={this.state.width} />;
    if (this.state.width === 'xs' || this.state.width === 'xxs') 
      JumpToLinks = <JumpMenu width={this.state.width} />;

    return (
      <div className="header-box" style={this.state.hidden ? { top: '-50px' } : undefined}>
        {JumpToLinks}

        <a id="header-gitHubIcon" className="header-icon" title="GitHub"
           href="https://github.com/velinom" target="blank"/>
        <a id="header-linkedInIcon" className="header-icon" title="LinkedIn"
           href="https://www.linkedin.com/in/mark-velino-a14144115" target="blank" />
      </div>
    );
  }
}