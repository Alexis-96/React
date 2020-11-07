import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import Login from './Auth/Login';
import Home from './Home';


const Root = () => {

    const [token, setToken] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setToken(token);
        }
    }, []);

return(
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path={'/'} component={Login} />
            <PrivateRoute exact path={'/home'} component={Home} />
           {/*  <Route path={'/login'} exact render={()=>(
                token?
                    <Redirect to={'/home'}/>
                    :
                    <Longin onLogin={(token) => setToken(token)}/>
            )}> 
            </Route>
            {
                token?
                    <Route path={'/home'} exact render={()=>(
                        <Home/>
                    )}>
                    </Route>
                    :
                    <Redirect to={'/login'}/>
            }
            */}
        </Switch>
    </BrowserRouter>
    
)


};

export default Root;