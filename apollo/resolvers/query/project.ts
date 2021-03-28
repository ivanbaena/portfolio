export const projectQuery = {
  projects: (_: any, {}: any, { dataSources }: any) =>
    dataSources.projects.projects(),
};
