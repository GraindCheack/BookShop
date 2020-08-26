import { GET_BOOKS, ADD_BOOK, ADD_ERROR } from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        error: action.payload
      }
    case GET_BOOKS:
      return {
        ...state, 
        books: action.payload
      }
    case ADD_BOOK:
    default:
      return state;
  }
};