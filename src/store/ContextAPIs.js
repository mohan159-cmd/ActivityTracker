import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    
    const [userContext, setUserContext] = useState(() => {
        const savedUser = localStorage.getItem("userContext");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Save userContext to localStorage whenever it changes
    useEffect(() => {
        if (userContext) {
            localStorage.setItem("userContext", JSON.stringify(userContext));
        } else {
            localStorage.removeItem("userContext"); 
        }
    }, [userContext]);

    return (
        <UserContext.Provider value={{ userContext, setUserContext }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
    return useContext(UserContext);
};
