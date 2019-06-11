import React from 'react';
import './App.css';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import loginContainer from './components/auth/loginContainer';
import Home from './components/layout/Home';

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <Switch>
            <Route path='/login' component={loginContainer} />
            <Route exact path='/' component={Home} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
