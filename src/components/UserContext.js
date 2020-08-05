import React, { useState, createContext } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(['bayuw', 'akubaru', 'rijuki'])
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}
