import { combineReducers } from 'redux';
import register from './register';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  register, errors, messages, auth
});
