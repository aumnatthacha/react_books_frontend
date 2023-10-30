/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import PropTypes from 'prop-types'; // นำเข้า PropTypes

const AuthContext = createContext({
    
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
