import React from 'react';
import ReactDOM from 'react-dom';
import './About.css';

export default class About extends React.Component {
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
      const percentY = 0.3 -(ammountOnScreen * 0.3 / (this.ref.offsetHeight + window.innerHeight));
      console.log(percentY);
      const backgroundPosition = 'center ' + (percentY * 100) + '%';
      this.setState({ backgroundPosition })
    }
  }

  render() {
    return (
      <div className={"about-box " + this.state.width}>
        <div className={"about-background " + this.state.width} 
             style={{ backgroundPosition: this.state.backgroundPosition}} />
        <div className="about-backgroundMask" />
        <div className={"about-content " + this.state.width}>
          <div className={"about-title " + this.state.width}>About</div>
          <p className={"about-discription " + this.state.width}>
            I am a fourth year student at Northeastern University, currently applying for my third Co-op
          position. I have a combined major of Computer Science and Physics because I love to explore
          the interactions between technology and the universe.
          </p>
          <p className={"about-discription " + this.state.width}>
            Thanks to Northeastern’s Co-op program, I have gained valuable, real-life experience as both a
          laboratory technician at Liquiglide and a software developer at Power Advocate. Having worked in
          each of my fields of study in the past, I hope to combine my passions for my next position from
          July to December 2018.
          </p>
          <p className={"about-discription " + this.state.width}>
            When I am not working hard in classes or at work, I enjoy hiking and camping in my home state of
          New Hampshire and fawning over dogs.
          </p>
        </div>
      </div>
    );
  }
}