import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import Home from './Pages/index';
import Sell from './Pages/Sell';
import SignInPage from './Pages/SignIn';

function App() {
    return (
        <Router>
        
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
          <Route path="/sell" component={Sell} exact />
        </Switch>

        </Router>
    );
}

export default App;
 