import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router,  Switch, Route, Redirect } from 'react-router-dom';

import history from '../history';
import Header from './layout/Header';
import Dashboard from './dashboard/Dashboard'
import Home from './home/Home'
import Notes from './notifications/Notes'
import { NotFound } from './common/Error'

import { Provider } from 'react-redux';
import store from '../store';
import dashboard from './dashboard/Dashboard';
import Modal from './notifications/Modal';
import { loadUser } from '../actions/auth';

function App() {
  const [activeEl, setActiveEl] = useState(dashboard)
  const [modalData, setModalData] = useState({})

  useEffect(() => {
    store.dispatch(loadUser())
  }, [store])
  

  return (
    <Provider store={store}>
      <Router history={history}>
        <Header activeEl={activeEl}/>
        <Switch>
          <Route exact path='/dashboard' render={props => <Dashboard setActiveEl={setActiveEl}/>} />
          <Route exact path='/home' render={props => <Home setActiveEl={setActiveEl}/>}/>
          <Redirect exact from="/" to="dashboard"/>
          <Route render={props => <NotFound setActiveEl={setActiveEl}/>}/>
        </Switch>
        <Notes setModalData={setModalData}/>
        <Modal modalData={modalData}/>
      </Router>
    </Provider>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));
