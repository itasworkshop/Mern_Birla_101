import React,{useState} from 'react'


export const CurrencyConvert= (props)=> {
    const [out, setOut] = useState(0);

    const update = (e) =>{ 
        console.log(e.target.value);
    
        if(e.target.value === "us"){
          setOut(parseFloat(props.inputValue)*props.dollar);
        }else if(e.target.value === "ind"){
          setOut(parseFloat(props.inputValue)*props.rupee);
        }else if(e.target.value === "erp"){
          setOut(parseFloat(props.inputValue)*props.euro);
        }else if(e.target.value === "yuan"){
          setOut(parseFloat(props.inputValue)*props.yuan);
        }
      }
   
  return (
    <div>
        <div>
        <div>
        <input type="text"  value={out} />
        <select   onChange={update} >
              <option value="" >Select country</option>
              <option value="ind" >Indian Rupee</option>
              <option value="us" >US Dollar</option>
              <option value="erp" >Euro</option>
              <option value="yuan" >Yuan</option>
        </select> 
       </div>
        </div>
    </div>
  )
}