import { useState } from "react";
import AuthContext from "./AuthContext";

const ContextProvider = (props) => {

    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler= () => {
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