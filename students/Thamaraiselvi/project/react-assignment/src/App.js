import React from 'react';
import Imagetoggle from './Imagetoggle'
import Login from './Login'
import "./App.css";
const rupee=300
class appComponunt extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {         
      dollar:rupee* 79.84,
      value: "Rupee to Dollar",
      val: "Convert Dollar"
   
    }
  }
  Buttonchange=() =>{
    this.setState({
      dollar:rupee / 79.84,
      value: "Dollar to Rupee",
      val: "Convert Rupee"
    })
  }
  render(){
    return(
      <div>
        <Login />
        <h1>Example 2:</h1>
        <h3>Image Toggle on hover</h3>
        <Imagetoggle />
        <h1>Example 3:</h1>
        <h3>Amount {rupee} Convert</h3>
        <h3>{this.state.value} {this.state.dollar}</h3>
        <button onClick={this.Buttonchange} type='button'>{this.state.val}</button>
        
        </div>
    )
  }

}
export default appComponunt;
