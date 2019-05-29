import React from 'react';
import './App.css';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Login from './components/auth/Login';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
