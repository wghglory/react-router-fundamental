import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { login } from '../store';

function Login({ location, isAuthenticated, login }) {
  const redirect = (location.state && location.state.redirect) || '/'; // redirect address

  if (isAuthenticated) {
    return <Redirect to={redirect} />;
  }

  return (
    // NOTICE: IF div changes to form, the button dispatch will trigger a reload ...
    <div>
      <p>⽤户登录</p>
      <p>
        <button onClick={login}>登录</button>
      </p>
    </div>
  );
}

export default connect(
  state => ({ isAuthenticated: state.loginState.isAuthenticated }),
  dispatch => ({
    login: () => {
      dispatch(login());
    }
  })
)(Login);
