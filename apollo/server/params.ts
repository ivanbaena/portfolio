import { typeDefs } from '../schema';
import { resolvers } from '../resolvers';
import { User, Project } from '../data-source';
import { user, project } from '../models';

export const params = {
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new User(user),
    projects: new Project(project),
  }),
  context: ({ req }: { req: any }) => ({
    request: () => req,
    getUser: () => req.user,
    logout: () => req.logout(),
  }),
};
