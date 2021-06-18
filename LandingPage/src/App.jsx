import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import Home from './Pages/index';
import Sell from './Pages/Sell';
import SignInPage from './Pages/SignIn';
import Carbon from './Pages/Carbon';
import Shop from './Pages/Shop';

function App() {
    return (
        <Router>
        
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
          <Route path="/sell" component={Sell} exact />
          <Route path="/carbon" component={Carbon} exact/>
          <Route path="/shop" component={Shop} exact/>
        </Switch>

        </Router>
    );
}

export default App;
 