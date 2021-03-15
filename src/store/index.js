import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = { isAuthenticated: false, loading: false };

// REDUCER
export function login(state = initialState, action) {
  switch (action.type) {
    case 'requestLogin':
      return { isAuthenticated: false, loading: true };
    case 'loginSuccess':
      return { isAuthenticated: true, loading: false };
    case 'logout':
      return { isAuthenticated: false, loading: false };
    default:
      return state;
  }
}

// ACTION
export function loginAction() {
  return (dispatch) => {
    dispatch({ type: 'requestLogin' });

    setTimeout(() => {
      dispatch({ type: 'loginSuccess' });
    }, 1000);
  };
}

// STORE
const store = createStore(combineReducers({ login }), applyMiddleware(thunk)); // login will be one key of state
export default store;
