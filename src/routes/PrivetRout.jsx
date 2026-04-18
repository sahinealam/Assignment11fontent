import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivetRout = ({children}) => {
    const{user,loading,roleLoading,userStatus}=useContext(AuthContext);
    if(loading || roleLoading){
        return <div>Loading...</div>
    }
    if(!user || !userStatus == "blocked"){
        return <Navigate to="/login" replace></Navigate>
    }
    return children;
    
};

export default PrivetRout;