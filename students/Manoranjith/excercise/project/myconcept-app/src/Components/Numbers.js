import React,{useState} from 'react'

export default function Numbers(props) {

    const [total, setTotal] = useState({
      addition :'',
      subtraction: '',
      multiplication: '',
      division:''
    });


    
      const addition = () => {
        setTotal( { 
          ...total,
          addition: parseInt(props.number1) + parseInt(props.number2)} );
        console.log(total);
      }
      function subtraction(){
        setTotal(
          { 
            ...total,
            subtraction : parseInt(props.number1) - parseInt(props.number2)}
        );
      }
      function multiplication(){
        setTotal(
           {
            ...total,
           multiplication: parseInt(props.number1) * parseInt(props.number2)}
        );
      }
      function division(){
        setTotal(
          {...total,
          division: parseInt(props.number1) / parseInt(props.number2)}
        );
      }
    
      return (
        <div >
            
            <div>
              <button onClick={addition} >Add</button> 
              
              <input type="text" value={total.addition} />
            </div>
            <div>
              <button onClick={subtraction} >Sub</button> 
              
              <input type="text" value={total.subtraction} />
            </div>
            <div>
              <button onClick={multiplication} >Multiple</button> 
              
              <input type="text" value={total.multiplication} />
            </div>
            <div>
              <button onClick={division} > Divide </button> 
              
              <input type="text" value={total.division} />
            </div>
            <div>
            
            </div>
            
        </div>
      );
    }
    
