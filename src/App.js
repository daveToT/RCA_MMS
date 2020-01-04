import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/admin/admin';
import WrappedLogin from './pages/login/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={WrappedLogin} />
        <Route path={['/admin', '/gen-page']} component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
