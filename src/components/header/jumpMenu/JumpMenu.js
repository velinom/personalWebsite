import React from 'react';
import './JumpMenu.css';

export default class JumpMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: props.width };

    this.onMenuClick = this.onMenuClick.bind(this);
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  onMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  onMenuButtonClick(section) {
    window.scrollTo(0, document.getElementById(section).offsetTop); 
    this.setState({menuOpen: false});
  }

  render() {
    return (
      <div className="header-jumpButtonMenu">
        <i className="material-icons menu" onClick={this.onMenuClick}>menu</i>
        <div className={"jumpMenu-dropDownMenu " + (this.state.menuOpen ? "open" : "") }>
          <div className="jumpMenu-menuButton" onClick={() => this.onMenuButtonClick("about")}>
            ABOUT
          </div>
          <div className="jumpMenu-menuButton" onClick={() => this.onMenuButtonClick("skills")}>
            SKILLS
          </div>
          <div className="jumpMenu-menuButton" onClick={() => this.onMenuButtonClick("experience")}>
            EXPERIENCE
          </div>
          <div className="jumpMenu-menuButton" onClick={() => this.onMenuButtonClick("contact")}>
            CONTACT
          </div>
        </div>
      </div>
    );
  }
}