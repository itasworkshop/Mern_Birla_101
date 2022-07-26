import React, { useState } from "react";
const DollerConverter = () => {
    const [dollervalue, setDollerValue] = useState()
    const [newentry, setNewentry] = useState();
    const [msg, setMsg] = useState(0);
    const ConvertButton = () => {
        const newentry = {dollervalue:dollervalue};
        const rupeesvalue = parseInt(dollervalue) * 79.76;
        console.log(rupeesvalue);
        setNewentry(rupeesvalue);
        console.log(setDollerValue);
        setMsg(rupeesvalue);

    }
    return (
        <>
            <h1> doller to Indian Rupess</h1>
            <input type="number" placeholder="Enter doller" value={dollervalue} onChange={(e) => setDollerValue(e.target.value)} />
            <br /><br />
            <button onClick={ConvertButton}>Convert</button>

            <p>Indian Rupess is:{msg}</p>
        </>
    )
}
export default DollerConverter;