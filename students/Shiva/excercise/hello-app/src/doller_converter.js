import React, { useState } from "react";
const DollerConverter = () => {
    // const [dollervalue, setDollerValue] = useState()
    // const [rupeevalue, setRupeevalue] = useState()
    // const [wonvalue, setWonvalue] = useState()
    const[value,setValue] = useState()
    const [newentry, setNewentry] = useState();
    const[rupesmsg,setRupesmsg] = useState(0);
    const[wonmsg,setWonsmsg] = useState(0);
    const[dollermsg,setDollersmsg] = useState(0);
    const Convert = () => {
       const newentry ={value:value}
           console.log(newentry);
           const rupeesvalue = parseInt(value) * 79.76;
           console.log(rupeesvalue);
           setNewentry(rupeesvalue);
           setRupesmsg(rupeesvalue);
           const dollervalues = parseInt(value) / 79.76;
           console.log(dollervalues);
           setNewentry(dollervalues);
           setDollersmsg(dollervalues);
           const wonvalues = parseInt(value) *16.88;
           console.log(wonvalues);
           setNewentry(wonvalues);
           setWonsmsg(wonvalues);
    
        
    }
   
    return (
        <>
            <h1> currancy Converter</h1>
            <input type="number" placeholder="Enter doller" value={value} onChange={(e) => setValue(e.target.value)} />
            <br /><br />
            <input type="number" placeholder="Enter India" value={value} onChange={(e) => setValue(e.target.value)} />
            <br/><br/>  
            <input type="number" placeholder="Enter Won" value={value} onChange={(e) => setValue(e.target.value)} />
            <br/><br/>  
            <button onClick={Convert}>Convert</button>
            <p>india  Price convert to doller is :{rupesmsg}</p>
            <p>Won price convert to india Price is :{wonmsg}</p>
            <p>doller  price convert to india price is:{dollermsg} </p>
           
        </>
    )
}
export default DollerConverter;