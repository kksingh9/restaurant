import { useState } from "react";
import AuthContext from "./AuthContext";

const ContextProvider = (props) => {
    const tokenid  =localStorage.getItem('tokenid');
    const [token, setToken] = useState(tokenid || null)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
    
        localStorage.setItem('tokenid',JSON.stringify(token));
        
        setToken(token);
    };

    const logoutHandler= () => {
        localStorage.removeItem('tokenid');
        setToken(null);
        
    };

    const contextObj = {
        token : token ,
        isLoggedIn: userIsLoggedIn,
        login : loginHandler,
        logout: logoutHandler
    }
    return(
        <AuthContext.Provider value={contextObj}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;