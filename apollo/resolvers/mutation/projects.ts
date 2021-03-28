import { ProjectInterface } from '../../models';

export const projectMutations = {
  addProject: (
    _: void,
    { name, brief, keywords, github, main, img }: ProjectInterface,
    { dataSources }: any
  ) => {
    return dataSources.projects.save(name, brief, keywords, github, main, img);
  },
  deleteProject: (
    _: void,
    { _id }: ProjectInterface,
    { dataSources }: any
  ): void => {
    return dataSources.projects.delete(_id);
  },
  updateProject: (
    _: void,
    { _id, name, brief, keywords, github, main, img }: ProjectInterface,
    { dataSources }: any
  ): void => {
    dataSources.projects.update(_id, name, brief, keywords, github, main, img);
  },
};
