import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Project from './project/project';
import styles from './projects.module.css';
import { GET_PROJECTS } from '../../queries/';

interface ProjectProps {
  listview: boolean;
}
const Projects: React.FC<ProjectProps> = ({ listview }) => {
  const { loading, error, data } = useQuery(GET_PROJECTS, { ssr: false });
  if (loading) return <span>Loading...</span>;
  if (error) return <span>`Error! ${error.message}`</span>;

  return (
    <div className={styles.container}>
      {data.projects.map((project: any, i: number) => {
        return <Project {...project} key={i} listview={listview} />;
      })}
    </div>
  );
};

export default Projects;
