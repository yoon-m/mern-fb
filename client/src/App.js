import React from 'react';
import './App.css';
import { Switch, HashRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import Login from './components/auth/Login';

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <Switch>
            <Route path='/login' component={Login} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
