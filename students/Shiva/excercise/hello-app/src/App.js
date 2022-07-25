// calcultor program
import React from 'react'


class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = { num1: '', num2: '', total: '' }
  }


  Add() {

    this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
    console.log(this.state)
  }
  Sub() {
    this.setState({ total: parseInt(this.state.num1) - parseInt(this.state.num2) })
    console.log(this.state)
  }
  Multi() {
    this.setState({ total: parseInt(this.state.num1) * parseInt(this.state.num2) })
    console.log(this.state)
  }
  Div() {
    this.setState({ total: parseInt(this.state.num1) / parseInt(this.state.num2) })
    console.log(this.state)
  }
  render() {
    return (
      <div className="mainContainer" style={{}}>
        <h1>Calcultor</h1>

        <input type="text" className="inputStyle" value={this.state.num1} onChange={(eve) => { this.setState({ num1: eve.target.value }) }} />
        <br /><br />

        <input type="text" className="inputStyle" value={this.state.num2} onChange={(eve) => { this.setState({ num2: eve.target.value }) }} />
        <br /><br />

        <button onClick={() => { this.Add() }} style={{ margin: "2px" }} >Addition</button>

        <button onClick={() => { this.Sub() }} style={{ margin: "2px" }} >Sub</button>
        <button onClick={() => { this.Multi() }} style={{ margin: "2px" }}  >Multiply</button>
        <button onClick={() => { this.Div() }} style={{ margin: "2px" }}  >Divided</button>
        <br /><br />
        <input type="text" className="outStyle" value={this.state.total} />

        <br /><br />
      </div>
    )
  }
}


export default App;