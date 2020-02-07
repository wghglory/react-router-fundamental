import React from 'react';
import { useLocation } from 'react-router-dom';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default ({ props }) => {
  const query = useQuery();

  const queryParams = [];

  for (let key of query.keys()) {
    queryParams.push({ key, value: query.get(key) });
  }

  // cuseLocation();
  // { pathname: "/hello", search: "?name=derek" , hash: "",   state: undefined }

  return (
    <div>
      This is to get query parameter
      <ul>
        {queryParams.map((q, index) => (
          <li key={index}>
            {q.key} {q.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
