import { usersQuery } from './user';
import { projectQuery } from './project';

export const Query = {
  ...usersQuery,
  ...projectQuery,
};
