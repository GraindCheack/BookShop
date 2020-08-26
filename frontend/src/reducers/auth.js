import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  isLoading: false,
  isAuthenticated: null,
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case AUTH_ERROR:
    default:
      return state;
  }
}