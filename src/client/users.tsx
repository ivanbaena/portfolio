import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  query {
    users {
      username
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_GREETING, { ssr: false });
  if (error) {
    console.log(error.networkError);
  }
  if (loading) return <p>loading</p>;
  return <h1>Hello {data.users[0].username}</h1>;
};

export default Users;
