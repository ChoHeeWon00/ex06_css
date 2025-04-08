//store -> AuthContext.js

import { createContext, useState } from "react"

const initalState = { isLoggedIn : false, username : null }
const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(
        JSON.parse(sessionStorage.getItem("auth")) || initalState);
    const loginProvider = ( username ) => {
        setAuth({isLoggedIn:true, username})
        sessionStorage.setItem("auth",
            JSON.stringify( {isLoggedIn:true, username} ) )
    }
    const logoutProvider = () => {
        setAuth(initalState);
        sessionStorage.clear();
    }
    const value = {auth, loginProvider , logoutProvider }
    return (<>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </>)
}
export {AuthContext, AuthProvider}