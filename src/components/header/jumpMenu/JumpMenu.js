import React from 'react';
import './JumpMenu.css';

export default class JumpMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: props.width };

    this.onMenuClick = this.onMenuClick.bind(this);
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  onMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    let Menu;
    if (this.state.menuOpen) 
      Menu = 
        <div className="jumpMenu-dropDownMenu">
          <div className="jumpMenu-menuButton">SKILLS</div>
          <div className="jumpMenu-menuButton">EXPERIENCE</div>
          <div className="jumpMenu-menuButton">PROJECTS</div>
          <div className="jumpMenu-menuButton">CONTACT</div>
        </div>

    return (
      <div className={"header-jumpButtonMenu " + this.state.width}>
        <i className="material-icons menu" onClick={this.onMenuClick}>menu</i>
        {Menu}
      </div>
    );
  }
}