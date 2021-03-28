import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      name
      brief
      keywords
      github
      main
      img
    }
  }
`;
