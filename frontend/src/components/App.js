import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router,  Switch, Route, Redirect } from 'react-router-dom';

import history from '../history';
import Header from './layout/Header';
import Dashboard from './dashboard/Dashboard'
import BookList from './bookList/BookList'
import { NotFound } from './common/Error'

import { Provider } from 'react-redux';
import store from '../store';
import dashboard from './dashboard/Dashboard';

function App() {
  const [activeEl, setActiveEl] = useState(dashboard)

  return (
    <Provider store={store}>
      <Router history={history}>
        <Header activeEl={activeEl}/>
        <Switch>
          <Route exact path='/dashboard' render={props => <Dashboard setActiveEl={setActiveEl}/>} />
          <Route exact path='/book_list' render={props => <BookList setActiveEl={setActiveEl}/>}/>
          <Redirect exact from="/" to="dashboard"/>
          <Route render={props => <NotFound setActiveEl={setActiveEl}/>}/>
        </Switch>
      </Router>
    </Provider>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));
