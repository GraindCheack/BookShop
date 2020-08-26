import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AbstractTable } from '../common/AbstractTable';
import { Pagination } from '../common/Pagination';
import { BookTable } from './BookTable';
import BookCreate from './BookCreate';
import BookSearch from './BookSearch';

import store from '../../store'
import { getBooks } from '../../actions/home'

function Home (params){
  const { setActiveEl, auth } = params
  
  useEffect(() => {
    setActiveEl("Book list")
    store.dispatch(getBooks(1))
  }, [setActiveEl])

  const loadBooks = (page, { search }, order_by="") => {
    params.getBooks(page, search, order_by)
  }

  const { books={} } = params.home

  return (
    <main className="flex-grow-1">
      <div className="container">
        
        {auth.isAuthenticated && <BookCreate/>}
        {auth.isAuthenticated && <a className="btn btn-primary" href="/books/api/bookshop/">Скачать SVG</a>}
        <div className="row mt-5 justify-content-center">
          <div className="col d-flex justify-content-center">
            <AbstractTable Table={BookTable} Pagination={Pagination} Search={BookSearch} dataFunction={loadBooks} data={books}/>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  home: state.home
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Home);