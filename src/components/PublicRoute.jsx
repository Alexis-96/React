import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PublicRoute = ({component:Component, ...rest})=>{

    const token = localStorage.getItem('token');

    return (
        <Route
        {...rest}
        component={(props)=>(
            token?
            <Redirect to={'/login'}/>
            :
            <Component {...props}/>
        )}
        >
        </Route>
    )

}


export default PublicRoute;