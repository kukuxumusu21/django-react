import { REGISTERED, DEL_REGISTERED, ADD_REG, CLEAR_LEADS } from '../actions/types.js';

const initialState = {
  register: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case REGISTERED:
      return{
        ...state,
        register: action.payload
      };

    case DEL_REGISTERED:
      return{
        ...state,
        register: state.register.filter(register => register.id !== action.payload)
      };

    case ADD_REG:
      return{
        ...state,
        register: [...state.register, action.payload]
      };
    case CLEAR_LEADS:
      return {
        ...state,
        register: [],
      };

      default :
        return state;
  }
}
