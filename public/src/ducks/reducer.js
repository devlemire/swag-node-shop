import URL from '../api';
import axios from 'axios';

const initialState = {
  user: '',
  cart: []
};

const GET_CART = "GET_CART";

export default function( state = initialState, action ) {
  switch( action.type ) {
    case GET_CART + '_FULFILLED':
      return {
        user: state.user,
        cart: action.payload
      };
    default: return state;
  }
}

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get( URL ).then( response => response.data )
  }
}