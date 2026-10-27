import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return React.createElement(
        UserContext.Provider,
        { value: { user, setUser } },
        children
    );
};

export default UserContext;