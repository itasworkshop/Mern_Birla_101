import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//HOC --> is a function which takes componentand returns a new component, reuse component logic

function getUser(){
  return{
    id:101,
    name:"Rajesh",
    age:25,
    street: "10th cross road",
    state:"KA"
  }
}

function showUser(props){
  return(
    <div>
      <p>User Id is :{props.id}</p>
      <p>User Name is :{props.name}</p>
      <p>User Age is :{props.age}</p>
    </div>
  )
}

function UserAddress(props){
  return(
    <div>
      <p>User Id is :{props.id}</p>
      <p>User address street is :{props.street}</p>
      <p>User address state is :{props.state}</p>
    </div>
  )
}

var HigherOrderComponent = function(WrappedComponent){

  return class UserDetailComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = getUser();
    }

    render(){
      return(
        <div>
          <WrappedComponent {...this.state}></WrappedComponent>
        </div>
      )
    }

  }

}

var UserDetail = HigherOrderComponent(showUser)
var UserAddressDetail = HigherOrderComponent(UserAddress)

ReactDOM.render(
  <UserAddressDetail />, document.getElementById('root')
);

