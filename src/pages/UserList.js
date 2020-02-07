import React from 'react';

import { connect } from 'react-redux';

export function UserList({ logout }) {
  return (
    <div>
      <h2>User List</h2>
      <button onClick={logout}>退出登录</button>
    </div>
  );
}

export const logout = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'loginFailure' });
  }, 1000);
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch({ type: 'loginFailure' })
  };
}

export default connect(
  state => state,
  mapDispatchToProps
)(UserList);
