import React from 'react';
import Home from '../pages/Home/Home';
import Login from './Login/Login';
import { Route, Redirect } from "react-router";
import { getUserLogged } from '../utils/Auth';

const PrivateRoute = ({ component, path, ...rest }) => (  
  <Route exact
    {...rest}
    render={props =>
      getUserLogged() ? (
        // <Component {...props} />
        <Route exact path={path} component={component} />
      ) : (
        <Redirect to={{ pathname: "/Login" }} />
      )
    }
  />
);

const App = () => {
    return (
      <>
        <PrivateRoute component={Home} path="/Home"/>
        {/* <Route exact path='/Home' component={Home} /> */}
        <Route exact path='/Login' component={Login} />
      </>
    );
}

export default App;