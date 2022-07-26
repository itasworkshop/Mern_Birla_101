import React from 'react';

class login extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {         
        password:''
   
    }
  }
  handleChange=(e)=>{
    console.log(e.target.value)
    if(e.target.value == 123){
        console.log('correct Password')
    }
    else{
        console.log('wrong')
    }
    this.setState({
     password: e.target.value
     
    })
    
  }
  Buttonchange=() =>{
    console.log()
    
  }
  render(){
    return(
      <div>
        <h1>Example 1:</h1>
        <input type="password" name="password"  onChange={this.handleChange}/>
        <button onClick={this.Buttonchange} type='button'>Submit</button>
        
        </div>
    )
  }

}
export default login;
