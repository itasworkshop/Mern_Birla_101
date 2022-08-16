import React from "react";


const UserContext = React.createContext(true);
//const UserContext = React.createContext(true); dafault value to variable

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext