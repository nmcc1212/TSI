import logo1 from "./logo.svg";
import logo2 from "./logo2.svg";
import React, { Component } from "react";

class LogoToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogo1: true,
    };
  }
  handleClick = () => {
    this.setState((state) => ({
      isLogo1: !state.isLogo1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click to change logo</button>
        <img
          src={this.state.isLogo1 ? logo1 : logo2}
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  }
}

export default LogoToggle;
