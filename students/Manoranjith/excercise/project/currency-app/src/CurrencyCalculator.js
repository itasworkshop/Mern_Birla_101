import React,{useState} from 'react'


export default function CurrencyCalculator(props) {
    const [out, setOut] = useState(0);

    const update = (e) =>{ 
        console.log(e.target.value);
    
        if(e.target.value === "us"){
          setOut(parseFloat(props.inputValue)*props.dollar);
        }else if(e.target.value === "dnr"){
          setOut(parseFloat(props.inputValue)*props.dinar);
        }else if(e.target.value === "drm"){
          setOut(parseFloat(props.inputValue)*props.dram);
        }else if(e.target.value === "ind"){
          setOut(parseFloat(props.inputValue)*props.rupee);
        }else if(e.target.value === "erp"){
          setOut(parseFloat(props.inputValue)*props.euro);
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
              <option value="drm" >Armanian Dram</option>
              <option value="dnr" >Algerian Dinar</option>
              <option value="erp" >Euro</option>
        </select> 
       </div>
        </div>
    </div>
  )
}
