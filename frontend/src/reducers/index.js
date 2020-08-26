import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import dashboard from './dashboard';
import home from './home';
import notes from './notes';

 export default combineReducers({
   form: formReducer,
   auth,
   home,
   notes,
   dashboard,
});