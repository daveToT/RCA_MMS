import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './layouts/admin-layout';
import WrappedLogin from './layouts/login-layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={WrappedLogin} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
