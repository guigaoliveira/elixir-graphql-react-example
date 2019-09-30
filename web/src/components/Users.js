import React, { useState, useEffect } from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import NewUser from "./NewUser";

const LIST_USERS = gql`
  {
    listUsers {
      id
      name
      email
    }
  }
`;

const USERS_SUBSCRIPTION = gql`
  subscription onUserCreated {
    userCreated {
      id
      name
      email
    }
  }
`;

const User = user => (
  <li key={user.id}>
    {user.name}: {user.email}
  </li>
);

function Users() {
  const {
    data: dataQuery,
    loading: loadingQuery,
    error: errorQuery
  } = useQuery(LIST_USERS);

  const {
    data: dataSubscription,
    loading: loadingSubscription
  } = useSubscription(USERS_SUBSCRIPTION);

  const [moreUsers, setMoreUsers] = useState([]);

  useEffect(() => {
    if (!loadingSubscription && dataSubscription) {
      setMoreUsers(state => [...state, dataSubscription.userCreated]);
    }
  }, [dataSubscription, loadingSubscription]);

  if (loadingQuery) return <p>Loading...</p>;
  if (errorQuery) return <p>Error :(</p>;

  return (
    <div className="grid-container">
      <div className="a">
        <h1>Users</h1>
        {
          <ul>
            {dataQuery.listUsers.map(User)}
            {!!moreUsers.length && moreUsers.map(User)}
          </ul>
        }
      </div>
      <NewUser className="b" />
    </div>
  );
}

export default Users;
