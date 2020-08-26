import axios from 'axios';
import { reset } from 'redux-form';
import { config } from './auth';
import { GET_AMOUNT, GET_LAST_MONTH, GET_AUTHORS, GET_CURR_YEAR } from './types';

export const getAmount = () => async (dispatch, getState) => {
  const res = await axios.get('/books/api/bookshop/amount/', config(getState));
  dispatch({
    type: GET_AMOUNT,
    payload: res.data
  });
};

export const getLastMonth = () => async (dispatch, getState) => {
  const res = await axios.get('/books/api/bookshop/last_month/', config(getState));
  dispatch({
    type: GET_LAST_MONTH,
    payload: res.data
  });
};

export const getAuthors = (page, last_name="", first_name="", middle_name="" ) => async (dispatch, getState) => {
  const res = await axios.get(`/books/api/bookshop/authors/?page=${page}&first_name=${first_name}&middle_name=${middle_name}&last_name=${last_name}`, config(getState));
  dispatch({
    type: GET_AUTHORS,
    payload: res.data
  });
  
};

export const getCurrYear = () => async (dispatch, getState) => {
  const res = await axios.get('/books/api/bookshop/current_year/', config(getState));
  dispatch({
    type: GET_CURR_YEAR,
    payload: res.data
  });
};

