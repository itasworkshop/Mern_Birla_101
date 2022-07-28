import React,{useState} from "react";
export const Toggleimg=(props)=>{

    const[data,setData]=useState(true)
    const handleclick=()=> setData(!data);
    return(

        <div>
            <h1>Toggle image</h1>
            <button onClick={handleclick }>button</button>
            {data && <img src={props.image}/>}
            {!data && <img src={props.image1}/>}
        </div>
    )
}