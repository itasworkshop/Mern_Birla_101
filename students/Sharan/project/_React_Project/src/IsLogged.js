import React from "react";
import ReactDOM from "react-dom";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login() {
    this.setState({
      isLoggedIn: true,
    });
  }
  logout() {
    this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.logout}>Logout</LogoutButton>;
    } else {
      button = <LoginButton onClick={this.login}>Login</LoginButton>;
    }

    return (
      <div className="App">
        <p>
          The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
        </p>
        {button}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LoginControl />, rootElement);
