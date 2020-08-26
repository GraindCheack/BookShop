import axios from 'axios';
import { stopSubmit } from 'redux-form';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
} from './types';

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get('/users/profile/', config(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}


export const config = getState => {
  const csrftoken = getCookie("csrftoken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRFToken": csrftoken
    }
  };

  return config;
};