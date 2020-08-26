import { GET_AMOUNT, GET_LAST_MONTH, GET_AUTHORS, GET_CURR_YEAR } from '../actions/types';

const initialState = {
  amount: {number: 0},
  last_month: {number: 0},
  curr_year: undefined,
  authors: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AMOUNT:
      return {
        ...state,
        amount: action.payload 
      }
    case GET_LAST_MONTH:
      return {
        ...state,
        last_month: action.payload 
      }
    case GET_AUTHORS:
      return {
        ...state,
        authors: action.payload
      }
    case GET_CURR_YEAR:
      return {
        ...state,
        curr_year: action.payload
      }
    default:
      return state;
  }
};