import React from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const location = useLocation();
    console.log(user)
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;



/* import React from 'react';
// import {Spinner} from 'react-bootstrap'
import {Navigate, Outlet} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../context/useAuth';


const PrivateRoute = () => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return //<Spinner animation="border" variant="primary" />
    }
    return (
        user.email? <Outlet/> :
       <Navigate
        to={{
            pathname: '/login',
        }}></Navigate>
    );
};

export default PrivateRoute; */