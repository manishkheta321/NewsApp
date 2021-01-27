import React from "react";
import "../App.css";
const dots = [".", "..", "..."];
var interval;
export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      char: 0,
    };
  }

  componentDidMount() {
    interval = setInterval(this.ontick, 500);
  }
  ontick = () => {
    var index = this.state.char;
    index++;
    index %= dots.length;
    this.setState({
      char: index,
    });
  };
  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(interval);
  }
  render() {
    return (
      <div className="loader">
        <h1>Loading{dots[this.state.char]}</h1>
      </div>
    );
  }
}
