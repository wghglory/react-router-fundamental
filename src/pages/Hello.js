import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const queryParams = {};

  const searchParams = new URLSearchParams(useLocation().search);

  for (let key of searchParams.keys()) {
    queryParams[key] = searchParams.get(key);
  }

  return queryParams;
}

export default ({ props }) => {
  // const queryParams = useQuery();

  const { search } = useLocation(); // {pathname: "/hello", search: "?name=derek", hash: "", state: undefined, key: "7k7zmd"}
  const queryParams = qs.parse(search.slice(1));

  return (
    <>
      <h2>This is to get query parameter</h2>
      <ul>
        {Object.keys(queryParams).map((k, index) => (
          <li key={index}>
            {k}: {queryParams[k]}
          </li>
        ))}
      </ul>
    </>
  );
};
