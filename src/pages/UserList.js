import React from 'react';

import { connect } from 'react-redux';

function UserList({ logout }) {
  return (
    <div>
      <h2>User List</h2>
      <button onClick={logout}>退出登录</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch({ type: 'logout' }),
  };
}

export default connect((state) => state, mapDispatchToProps)(UserList);
