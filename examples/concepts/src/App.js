import logo from './logo.svg';
import './App.css';

function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>This is too much money.</p>;
  }else{
    return <p>This is not too much money.</p>;
  }
}

export default CurrencyMessage;
