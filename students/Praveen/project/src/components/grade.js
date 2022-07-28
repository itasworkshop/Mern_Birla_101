import React,{useState} from 'react';

export default function Grade(){
    const [num1,setNum1]=useState(0);
    const[msg,setMsg]=useState('');

    const grade=()=>{
if(num1>=90){
    setMsg('grade is A');
}
else if(num1>80&&num1<=90){
    setMsg('grade is B')
}
else if(num1>70&&num1<=80){
    setMsg('grade is C')
}
else if(num1<=70)
    {setMsg('grade is fail')}

    };

    return(
        <div>
            <h2>grade</h2>
<input type="text" onChange={(e)=>setNum1(e.target.value)}/>
<button onClick={()=>grade()}>submit</button>
<h3>The marks obtained is {num1} and the Grade is {msg}</h3>
        </div>
    )

}