import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      _id
      name
      brief
      keywords
      github
      main
      img
    }
  }
`;
