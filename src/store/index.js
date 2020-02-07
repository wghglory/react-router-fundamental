import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = { isAuthenticated: false, loading: false };

// REDUCER
export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'requestLogin':
      return { isAuthenticated: false, loading: true };
    case 'loginSuccess':
      return { isAuthenticated: true, loading: false };
    case 'loginFailure':
      return { isAuthenticated: false, loading: false };
    default:
      return state;
  }
}

// ACTION
export function login() {
  return dispatch => {
    dispatch({ type: 'requestLogin' });

    setTimeout(() => {
      dispatch({ type: 'loginSuccess' });
    }, 1000);
  };
}

// STORE
const store = createStore(combineReducers({ loginState: loginReducer }), applyMiddleware(thunk)); // loginState will be one key of state
export default store;
