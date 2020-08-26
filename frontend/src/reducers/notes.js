import { GET_SYSTEM_NOTE, GET_PERSONAL_NOTE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SYSTEM_NOTE:
      return {
        ...state,
        systemNotes: action.payload
      }
    case GET_PERSONAL_NOTE:
      return {
        ...state, 
        personalNotes: action.payload
      }
    default:
      return state;
  }
};
