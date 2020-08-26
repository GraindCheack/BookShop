import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from '../common/Pagination';
import { AbstractTable } from '../common/AbstractTable';
import { Card } from './Card';
import { AuthorTable } from './AuthorTable';

import store from '../../store'
import AuthorSearch from './AuthorFilter';
import Graph from './Graph';

import { getAmount, getLastMonth, getAuthors } from '../../actions/dashboard';

function Dashboard (params) {
  const { setActiveEl } = params

  useEffect(() => {       
    store.dispatch(getLastMonth())
    store.dispatch(getAmount())
    store.dispatch(getAuthors(1))
    
    setActiveEl("Dashboard")
  }, [setActiveEl, store])

  const { amount, last_month, authors } = {...params.dashboard}

  const loadAuthors = (page, formValue) => {
    const {last_name="", first_name="", middle_name=""} = formValue
    params.getAuthors(page, last_name, first_name, middle_name)
  }

  return (
    <main className="flex-grow-1">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col row">
            <div className="col-12 col-md-6 mt-3 p-0">
              <Card blockStyle={{borderLeft: "8px solid #435EBF"}} blockClases="mx-auto mx-md-0 mr-md-auto" text="Книг (всего)" data={amount}/>
            </div>
            <div className="col-12 col-md-6 mt-3 p-0">
              <Card blockStyle={{borderLeft: "8px solid #D44B3D"}} blockClases="mx-auto mx-md-0 ml-md-auto" text="Книг (прошлый месяц)" data={last_month}/>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col d-flex justify-content-center">
            <AbstractTable Table={AuthorTable} Search={AuthorSearch} Pagination={Pagination} dataFunction={loadAuthors} data={authors}/>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col d-flex justify-content-center">
            <Graph/>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { getAmount, getLastMonth, getAuthors }
)(Dashboard);
