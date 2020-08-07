import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  Switch } from 'react-router-dom';

import history from '../history';
import Header from './layout/Header';

import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          
        </Switch>
      </Router>
    </Provider>
  );
}


ReactDOM.render(<App />, document.querySelector('#app'));