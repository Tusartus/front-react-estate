import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Signup from './user/Signup';
import Signin from './user/Signin';
import Home  from './core/Home';
import About  from './core/About';

import Seller  from './core/Seller';


const Routes = () => {
      return (
      <BrowserRouter>
        
          <Switch>
               <Route path="/" exact component = {Home} />
              <Route path="/signin" exact component = {Signin} />
              <Route path="/signup" exact component = {Signup} />

              <Route path="/about" exact component = {About} />

              <Route path="/seller" exact component = {Seller} />
              
          </Switch>

      </BrowserRouter>
      );
};

export default Routes;
