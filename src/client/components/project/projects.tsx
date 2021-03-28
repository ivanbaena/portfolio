import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Project from './project/project';
import styles from './projects.module.css';
import { GET_PROJECTS } from '../../queries/';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS, { ssr: false });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.container}>
      {data.projects.map((project: any, i: number) => {
        return <Project {...project} key={i} />;
      })}
    </div>
  );
};

export default Projects;
