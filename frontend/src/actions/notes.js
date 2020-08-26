import axios from 'axios';
import { config } from './auth';
import { GET_SYSTEM_NOTE, GET_PERSONAL_NOTE } from './types';

export const getSystemNote = () => async (dispatch, getState) => {
  const res = await axios.get(`/books/api/bookshop/system_notice/`, config(getState));
  dispatch({
    type: GET_SYSTEM_NOTE,
    payload: res.data
  });
};

export const getPersonalNote = () => async (dispatch, getState) => {
  const res = await axios.get(`/books/api/bookshop/personal_notice/`, config(getState));
  dispatch({
    type: GET_PERSONAL_NOTE,
    payload: res.data
  });
};

export const readSystemNote = note => async (dispatch, getState) => {
  await axios.post('/books/api/bookshop/read_system_notice/', {"note": note.id}, config(getState));
};

export const readPersonalNote = note => async (dispatch, getState) => {
  console.log(note)
  await axios.put('/books/api/bookshop/read_personal_notice/', note, config(getState));
};


