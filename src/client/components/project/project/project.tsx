import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../../mutations/';
import { GET_PROJECTS } from '../../../queries/';

interface ProjectProps {
  name: string;
  _id: string;
  brief: string;
  keywords: string[];
  github: string;
  main: string;
  img: string;
  listview: boolean;
}
const Project: React.FC<ProjectProps> = ({
  name,
  _id,
  brief,
  keywords,
  main,
  github,
  img,
  listview,
}) => {
  const [deleteProject, { data }] = useMutation(DELETE_PROJECT, {
    variables: { _id },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  if (listview) {
    return (
      <div>
        <h1>{name}</h1>
        <span onClick={() => deleteProject()}>delete</span>
      </div>
    );
  }
  return (
    <div>
      <span onClick={() => deleteProject()}>delete</span>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <h2>{brief}</h2>
      <ul>
        {keywords.map((keyword, i) => (
          <li key={i}>{keyword}</li>
        ))}
      </ul>
      <div>
        <a href='#'>{github}</a> <br />
        <a href='#'>{main}</a>
      </div>
    </div>
  );
};

export default Project;
