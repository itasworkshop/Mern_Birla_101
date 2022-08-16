import { Component, useCallback, useContext } from "react";
import UserContext, { UserConsumer } from "./UserContext";



const HomePage = () => {
    const user  = useContext(UserContext)

    return <div>{user.name}</div>
}

export default HomePage