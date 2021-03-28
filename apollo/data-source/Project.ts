import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ProjectInterface } from '../models';
import { Types } from 'mongoose';

export class Project extends MongoDataSource<ProjectInterface> {
  projects() {
    return this.model.find();
  }

  findProject(id: string) {
    return this.model.find({ userId: id }).exec();
  }

  save(
    name: string,
    brief: string,
    keywords: string[],
    github: string,
    main: string,
    img: string
  ) {
    return new this.model({
      name: name,
      brief: brief,
      keywords: keywords,
      github: github,
      main: main,
      img: img,
    }).save();
  }

  delete(id: Types.ObjectId | string) {
    return this.model.findByIdAndDelete(id).exec();
  }

  // update(id: Types.ObjectId, post: String) {
  //   this.model.findByIdAndUpdate(id, { post: post }).exec();
  // }
}
