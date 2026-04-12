import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivetRout = ({children}) => {
    const{user,loading,roleLoading}=useContext(AuthContext);
    if(loading || roleLoading){
        return <div>Loading...</div>
    }
    if(!user){
        return <Navigate to="/login" replace></Navigate>
    }
    return children;
    
};

export default PrivetRout;