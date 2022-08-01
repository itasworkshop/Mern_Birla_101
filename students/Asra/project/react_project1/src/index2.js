import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function MyHello(){
  return <img src="https://media1.giphy.com/media/IRFQYGCokErS0/giphy.webp?cid=ecf05e47c0031p59x2c0scw5pkpgj9qd5vcci8yiy1iae3bz&rid=giphy.webp&ct=g" width="200px" height="200px"/>;
}


function YourHello(){
  return <h1>Hello from your hello.</h1>;
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

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