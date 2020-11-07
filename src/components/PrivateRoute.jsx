import React from 'react';
import { Redirect, Route } from 'react-router-dom';



const PrivateRoute = ({component:Component, ...rest})=>{

    const token = localStorage.getItem('token');

    return (
        <Route
        {...rest}
        component={(props)=>(
            token?
            <Component {...props}/>
            :
            <Redirect to={'/login'}/>
        )}
        >
        </Route>
    )

}


export default PrivateRoute;