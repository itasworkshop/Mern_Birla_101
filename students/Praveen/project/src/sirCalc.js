import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>This is too much money.</p>;
  }else{
    return <p>This is not too much money.</p>;
  }
}


const unitName = {
  r: 'rupees',
  d: 'dollar',
  e:'euros'
}

function toRupees(dollar){
  return dollar*80;
}

function toDollar(rupees){
  return (rupees/80);
}

function toEuros(rupees){
return(rupees/85);
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




export default class Calculator extends React.Component{

  constructor(props){
    super(props);
    this.state = {currency:'',unit:'r'};
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
    this.handleEurosChange=this.handleEurosChange.bind(this);
  }

  handleRupeeChange(currency){
    this.setState({'unit':'r',currency});
  }

  handleDollarChange(currency){
    this.setState({'unit':'d',currency});
  }

  handleEurosChange(currency){
    this.setState({'unit':'e',currency});
  }


  render(){
    const currency = this.state.currency;
    const unit = this.state.unit;

    const rupees = unit === 'd' ? toRupees(currency):currency;
    const dollar = unit === 'r' ? toDollar(currency):currency;
    const euros = unit === 'r' ? toEuros(currency):currency;

    return(
      <div>
        <CurrencyInput unit='r' currency={rupees} onCurrencyChange={this.handleRupeeChange}/>
        <CurrencyInput unit='d' currency={dollar} onCurrencyChange={this.handleDollarChange}/>
        <CurrencyInput unit='e' currency={euros} onCurrencyChange={this.handleEurosChange}/>
      </div>
    )
  }
}