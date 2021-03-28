import { userMutations } from './user';
import { projectMutations } from './projects';

export const Mutation = { ...userMutations, ...projectMutations };
