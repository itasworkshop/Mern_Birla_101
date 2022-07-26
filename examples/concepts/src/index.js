import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

<<<<<<< HEAD


function MyHello(){
  return <h1>Hello from my hello.</h1>;
}


function YourHello(){
  return <h1>Hello from your hello.</h1>;
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>Login</button>
=======
//React DOM apply changes only where it requires.

function tick() {
  const elements = (
    <div>
      <h1>This is demo for Clock Tick.</h1>
      <h2>This is {new Date().toString()}</h2>
    </div>
>>>>>>> 288ee7a50740b6cb5ec968da85f1ee6bd9f13328
  );
}

<<<<<<< HEAD
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }else{
    return <YourHello />;
  }
}

class LoginComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {isLoggedIn:false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(){
    this.setState({isLoggedIn:false});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn:true});
  }

  render(){
    const isLog = this.state.isLoggedIn;
    let button;

    if(isLog){
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }else{
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    }

    return(
      <div>
        <SayHello isTrue={isLog} />
        {button}
      </div>
    );
  } 

}

ReactDOM.render(
  <LoginComponent />, document.getElementById('root')
);
=======
  ReactDOM.render(elements, document.getElementById("root"));
}

setInterval(() => {
  tick();
}, 1000);
>>>>>>> 288ee7a50740b6cb5ec968da85f1ee6bd9f13328
