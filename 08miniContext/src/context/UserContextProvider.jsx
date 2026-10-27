import React from "react";
import UserContext from "./UserContext";

const UserContextProvider= ({childrn}) =>{
    const [user,setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </ UserContext.Provider>
    )

}
export default UsewrContextProvider