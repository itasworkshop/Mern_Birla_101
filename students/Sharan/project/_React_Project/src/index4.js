import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Types of components
//1) Function based components -- stateless components
//2) Class based components -- stateful components

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false }; //only in class based
    this.myHandler = this.myHandler.bind(this);
  }

  myHandler() {
    this.setState((state) => ({ isOn: !state.isOn }));
  }

  render() {
    return (
      <button onClick={this.myHandler}>{this.state.isOn ? "ON" : "OFF"}</button>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
