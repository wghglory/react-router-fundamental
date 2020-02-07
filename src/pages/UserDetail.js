import React from 'react';

import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

export default ({ match, history, location }) => {
  // console.log(match, history, location);

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log(path === match.path); // /user/:id
  console.log(url === match.url); // /user/1

  return (
    <div>
      <h2>
        User Detail ID = {match.params.id} OR {useParams().id}
      </h2>
      <p>Nested Routes</p>
      <nav>
        <Link to={`${match.url}/search`}>Jump to nested search</Link>
      </nav>
      <Route path={`${url}/search`} component={() => <h3>Nested component</h3>} />
    </div>
  );
};
