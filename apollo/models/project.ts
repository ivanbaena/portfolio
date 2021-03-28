import mongoose, { Schema, Document } from 'mongoose';

export interface ProjectInterface extends Document {
  name: string;
  brief: string;
  keywords: string[];
  github: string;
  main: string;
  img: string;
}

export const ProjectSchema = new Schema({
  name: { type: String, required: true },
  brief: { type: String, required: true },
  keywords: { type: Array, required: true },
  github: { type: String, required: true },
  main: { type: String, required: true },
  img: { type: String, required: true },
});

export const project = mongoose.model<ProjectInterface>(
  'project',
  ProjectSchema
);
