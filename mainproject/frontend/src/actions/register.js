import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { REGISTERED, DEL_REGISTERED, ADD_REG } from './types';

export const getRegistered = () => (dispatch, getState) => {
  axios.get('/api/reg/',tokenConfig(getState))
  .then(res=> {
    dispatch({
      type: REGISTERED,
      payload: res.data
    });
  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const delRegistered = id => (dispatch, getState) => {
  axios
  .delete(`/api/reg/${id}/`, tokenConfig(getState))
  .then(res=> {
    dispatch(createMessage({ delRegistered: 'User Deleted' }));
    dispatch({
      type: DEL_REGISTERED,
      payload: id
    });
  })
  .catch(err=>console.log(err));
}

export const addReg = (regUser) => (dispatch, getState) => {
  axios.post('/api/reg/',regUser, tokenConfig(getState))
  .then(res=> {
    dispatch(createMessage({ addReg: 'User Added' }));
    dispatch({
      type: ADD_REG,
      payload: res.data
    });
  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
