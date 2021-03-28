import { gql } from 'apollo-server-express';

export const project = gql`
  type Project {
    _id: ID
    name: String
    brief: String
    keywords: [String]
    github: String
    main: String
    img: String
  }
  extend type Query {
    projects: [Project]
  }
  extend type Mutation {
    addProject(
      name: String!
      brief: String!
      keywords: [String]
      github: String!
      main: String!
      img: String!
    ): Project
    deleteProject(_id: ID): Project
    updateProject(_id: ID, project: String): Project
  }
`;
