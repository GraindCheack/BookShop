import axios from 'axios';
import { reset } from 'redux-form';
import { config } from './auth';
import { GET_BOOKS, ADD_BOOK, ADD_ERROR } from './types';

export const getBooks = (page, search="", order_by="") => async (dispatch, getState) => {
  const res = await axios.get(`/books/api/bookshop/book_list/?page=${page}&search=${search}&order_by=${order_by}`, config(getState));
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
};

export const addBook = formValues => async (dispatch, getState) => {
  try {
    const res = await axios.post('/books/api/bookshop/book_list/', {...formValues}, config(getState));
    dispatch({
      type: ADD_BOOK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADD_ERROR,
      payload: err.message
    });
  }
  dispatch(reset('bookForm'));
};
