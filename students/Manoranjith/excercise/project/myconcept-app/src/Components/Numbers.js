import React,{useState} from 'react'

export default function Numbers(props) {

    const [state, setState] = useState(
      {
        number1: '',
        number2: '',
        tot: ''
      });
    
      const addition = () => {
        setState({
          ...state,
           tot: parseInt(state.number1) + parseInt(state.number2) });
        console.log(state);
      }
      function subtraction(){
        setState({
          ...state,
          tot: parseInt(state.number1) - parseInt(state.number2)
        });
      }
      function multiplication(){
        setState({
          ...state,
          tot: parseInt(state.number1) * parseInt(state.number2)
        });
      }
      function division(){
        setState({
          ...state,
          tot: parseInt(state.number1) / parseInt(state.number2)
        });
      }
    
      return (
        <div >
            <div>
              <h3> Calculator </h3>
            </div>
             <>
             <input type="text" value={state.number1} 
             onChange={(e) => {setState({ ...state , number1 : e.target.value})} } />
             <input type="text" value={state.number2} 
             onChange={(e) => {setState({ ...state , number2 : e.target.value})}} />
             </>
            <div>
              <button onClick={addition} >Add</button> 
            </div>
            <div>
              <button onClick={subtraction} >Sub</button> 
            </div>
            <div>
              <button onClick={multiplication} >Multiple</button> 
            </div>
            <div>
              <button onClick={division} > Divide </button> 
            </div>
            <div>
            <input type="text" value={state.tot} />
            </div>
            
        </div>
      );
    }
    
