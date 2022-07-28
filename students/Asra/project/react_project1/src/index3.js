import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CurrencyMessage from './App';

function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>This is too much money.</p>;
  }else{
    return <p>This is not too much money.</p>;
  }
}

const unitName = {
  r: 'rupees',
  d: 'dollar'
}

function toRupees(dollar){
  return dollar*80;
}

function toDollar(rupees){
  return (rupees/80);
}

class CurrencyInput extends React.Component{

  constructor(props){
    super(props);
    //this.state = {currency:''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    //this.setState({currency:event.target.value});
    this.props.onCurrencyChange(event.target.value);
  }

  render(){
    //const currency = this.state.currency;
    const currency = this.props.currency;
    const unit = this.props.unit;

    return(

      <fieldset>
        <legend>Enter your currency in {unitName[unit]}.</legend>
        <input value={currency} onChange={this.handleChange} />
        <CurrencyMessage rupees={currency} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component{

  constructor(props){
    super(props);
    this.state = {currency:'',unit:'r'};
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
  }

  handleRupeeChange(currency){
    this.setState({'unit':'r',currency});
  }

  handleDollarChange(currency){
    this.setState({'unit':'d',currency});
  }

  render(){
    const currency = this.state.currency;
    const unit = this.state.unit;

    const rupees = unit === 'd' ? toRupees(currency):currency;
    const dollar = unit === 'r' ? toDollar(currency):currency;

    return(
      <div>
        <CurrencyInput unit='r' currency={rupees} onCurrencyChange={this.handleRupeeChange}/>
        <CurrencyInput unit='d' currency={dollar} onCurrencyChange={this.handleDollarChange}/>
      </div>
    )
  }
}


ReactDOM.render(
  <Calculator/>, document.getElementById('root')
);
