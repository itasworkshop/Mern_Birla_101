import React, { useState } from "react";

const Login = () => {
    const msg = "loginbutton";
    const [bg, setBg] = useState(msg);


    const LoginButoon = () => {
        const newmsg = "logout";
        setBg(newmsg);
        console.log(newmsg);

    }
    return (
        <>
            <h1>Login and Logout Function Using useState</h1>
            <button onClick={LoginButoon}>{bg}</button>
        </>
    )
}
export default Login;