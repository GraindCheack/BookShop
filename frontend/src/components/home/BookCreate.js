import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions/home'
import BookForm from './BookForm';

function BookCreate(params) {

  const onSubmit = formValues => {
    params.addBook(formValues);
  };

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col d-flex justify-content-center">
        <div className="dashboard-block d-block w-100">
          <BookForm onSubmit={onSubmit} />
          {params.book_create.error==="Request failed with status code 404" ? 
          <span className='ui pointing red basic label'>Такого автора у нас нет...</span>: 
          params.book_create.error==="Request failed with status code 400" ?
          <span className='ui pointing red basic label'>Такой артикул уже существует</span>: undefined}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  book_create: state.dashboard
});

export default connect(
  mapStateToProps,
  { addBook }
)(BookCreate);
