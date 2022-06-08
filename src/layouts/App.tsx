import React from 'react';
import loadable from '@loadable/component';
import {Redirect, Switch, Route} from 'react-router-dom';

const Main = loadable(() => import('../pages/Main'));
const Login = loadable(() => import('../pages/Auth/Login'));
const Signup = loadable(() => import('../pages/Auth/Signup'));

const App = () => {
  return (
      <Switch>
          <Redirect exact path="/" to="/main"/>
          <Route path="/main" component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
      </Switch>
  )
}

export default App;
