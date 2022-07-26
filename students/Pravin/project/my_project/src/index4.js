import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Horse() {
  return (
    <div>
      <img
        src="https://www.collinsdictionary.com/images/full/horse_84139573.jpg"
        alt="Horse"
        width={300}
      />
      ;
    </div>
  );
}

function RunningHorse() {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/photos/brown-sharp-horse-galloping-picture-id95369557?k=20&m=95369557&s=612x612&w=0&h=QNj5kBK2IE6fYTzLDChmOyvz43UZpIPvIDWLmz0ACV4="
        alt="RunningHorse"
        width={300}
      />
      ;
    </div>
  );
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function SayHello(props) {
  const isTrue = props.isTrue;

  if (isTrue) {
    return <Horse />;
  } else {
    return <RunningHorse />;
  }
}

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: false });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const isLog = this.state.isLoggedIn;
    let button;

    if (isLog) {
      button = <LoginButton onClick={this.handleLoginClick} />;
    } else {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }

    return (
      <div>
        <SayHello isTrue={isLog} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginComponent />, document.getElementById("root"));
