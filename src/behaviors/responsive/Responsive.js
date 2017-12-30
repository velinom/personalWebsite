import React from 'react';

export default class Resopnsive extends React.Component {
  constructor(props) {
    super(props);

    this.breakpoints = {
      1800: 'xl',
      1200: 'l',
      750: 'm',
      550: 's',
      0: 'xs'
    }

    const width = Math.max(...Object.keys(this.breakpoints).filter(key => key <= window.innerWidth));
    this.state = { width: this.breakpoints[width] }

    this.onWindowResized = this.onWindowResized.bind(this);
    this.createChildProps = this.createChildProps.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResized);
  }

  onWindowResized(event) {
    const filtered = Object.keys(this.breakpoints).filter(key => key <= event.target.innerWidth);
    const value = Math.max(...filtered);
    this.setState({ width: this.breakpoints[value] });
  }

  createChildProps(child) {
    return { width: this.state.width }
  }

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, this.createChildProps(child)));
  }
}