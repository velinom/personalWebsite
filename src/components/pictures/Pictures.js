import React from 'react';
import './Pictures.css';

export default class Pictures extends React.Component {
  constructor(props) {
    super(props);

    this.quotes = [
      { quote: 'We have a single mission: to protect and hand on the planet to the next generation', by: 'Francois Hollande' },
      { quote: 'The path toward sustainable energy sources will be long... America cannot resist this trasition, we must lead it', by: 'Barack Obama'},
      { quote: 'Climate change is a terrible problem, and it absolutely needs to be solved', by: 'Bill Gates' },
      { quote: 'Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight' , by: 'Ban Ki-moon' }
    ]

    this.state = { 
      width: props.width,
      index: 0
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.updateIndex();
    }, 5000);
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width) 
      nextState.width = nextProps.width
  }

  updateIndex() {
    this.setState({ changing: true });
    setTimeout(() => {
      let index = this.state.index + 1;
      if (index === 4) index = 0;
      this.setState({ index, changing: false });
    }, 500);
  }

  render() {
    return (
      <div className={"picture-box " + this.state.width}>
        <div className={"picture-quote " + this.state.width + " " + (this.state.changing ? "changing" : "")}>
          <i>{this.quotes[this.state.index].quote}</i>
          <div className="picure-author">{"- " + this.quotes[this.state.index].by}</div>
        </div>
        <div className={"picture " + this.state.width} id="picture-iceland" />
      </div>
    );
  }
}