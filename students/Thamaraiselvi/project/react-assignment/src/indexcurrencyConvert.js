import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';

class Select extends PureComponent {
    
        constructor(props) {
          super(props);
          this.state = {value:''};
          this.handleChange = this.handleChange.bind(this);
          this.handleRupeeChange = this.handleRupeeChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {   this.setState({value: event.target.value}); console.log(event.target.value)   }
        handleSubmit(event) {
            if(event.target.value === "SGD"){
                let sgd = (this.state.value * 57.59)
                this.setState({
                    val : "Convert inr to sgd",
                    current:"1 inr = 57.59 sgd(Singapour Currency)",
                    howmany: this.state.value + "inr = ",
                    amount : sgd,
                    currency : "SGD"
                })
            }
            else if(event.target.value === "Dollar"){
                let doll = (this.state.value * 79.78)
                this.setState({
                    val : "Convert Inr to Dollar",
                    current:"1 inr = 79.78 USD (Dollar)",
                    howmany: this.state.value + "inr = ",
                    amount : doll,
                    currency : "USD"
                })
            }
            else if(event.target.value === "EUR"){
                let eur = (this.state.value * 81.12)
                this.setState({
                    val : "Convert Inr to Eur",
                    current:"1 inr = 81.12 EUR (Europe)",
                    howmany: this.state.value + "inr = ",
                    amount : eur,
                    currency : "EUR"
                })
            }
            else if(event.target.value === "AUD"){
                let aud = (this.state.value * 55.47)
                this.setState({
                    val : "Convert Inr to Aud",
                    current:"1 inr = 55.47 aud (Australian)",
                    howmany: this.state.value + "inr = ",
                    amount : aud,
                    currency : "AUD"
                })
            }
          
          event.preventDefault();
        }
       
      
        render() {
           
          return (
            <form>
              <label>
                Rupee:<input type="number"  onChange={this.handleChange}  />        </label>
                <input type="number" onChange={this.handleRupeeChange} />
               <select onChange={this.handleSubmit}>
               <option>None</option>
                <option>SGD</option>
                <option >Dollar</option>
                <option >EUR</option>
                <option >AUD</option>
               </select>
              
                <p>{this.state.val} <span style={{color:'red'}}>{this.state.current} </span></p> <p style={{color:'green'}}>{this.state.howmany} {this.state.amount} {this.state.currency}</p>
            </form>
          );
        }
      }

ReactDOM.render(<Select />, window.document.body);