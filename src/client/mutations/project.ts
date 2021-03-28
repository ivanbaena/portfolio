import { gql } from '@apollo/client';

export const POST_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $brief: String!
    $keywords: [String!]
    $github: String!
    $main: String!
    $img: String!
  ) {
    addProject(
      name: $name
      brief: $brief
      keywords: $keywords
      github: $github
      main: $main
      img: $img
    ) {
      _id
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($_id: ID!) {
    deleteProject(_id: $_id) {
      _id
    }
  }
`;
