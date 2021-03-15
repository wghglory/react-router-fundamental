import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

/**
 * get isAuthenticated from redux store, and then render login or component.
 */
function PrivateRoute({ component: Cmp, isAuthenticated, ...rest }) {
  console.log(rest); // path, location, computedMatch...
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Cmp {...props} /> // ...props is must since Cmp can use location, match, etc
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { redirect: props.location.pathname },
            }}
          />
        )
      }
    />
  );
}

export default connect((state) => {
  return { isAuthenticated: state.login.isAuthenticated };
})(PrivateRoute);
