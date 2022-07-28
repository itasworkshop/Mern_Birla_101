import React from "react";

export const Calculatorprops=(props)=>{
return(

        <div>
            <h1> hello {Number(props.number1)+Number(props.number2)}</h1>
            <h1> hello {Number(props.number1)-Number(props.number2)}</h1>
            <h1> hello {Number(props.number1)*Number(props.number2)}</h1>
            <h1> hello {Number(props.number1)/Number(props.number2)}</h1>
            
        </div>

    )
    
}



