import React, { useState } from "react";
const PasswordState = () => {
    const msg = "login"
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [newentry, setNewentry] = useState("")    // data store in new state 
    const [bg, setBg] = useState(msg);

    const SubmitForm = () => {
        const newentry = { username: username, password: password }
        if ( username !==""  && password.length <= 3) {
            setNewentry(password);

            console.log(newentry)

            const newbg = "logout";
            setBg(newbg);
        }

    }
    return (
        <>
            <h1>Password State</h1>
            <input type="text" placeholder="Enter Username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <br /> <br />
            <input type="password" placeholder="Enter Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br /> <br />
            <button onClick={SubmitForm}>{bg}</button>
        </>
    )
}
export default PasswordState;