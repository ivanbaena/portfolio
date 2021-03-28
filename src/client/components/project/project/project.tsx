import React from 'react';

interface ProjectProps {
  name: string;
  brief: string;
  keywords: string[];
  github: string;
  main: string;
  img: string;
}
const Project: React.FC<ProjectProps> = ({
  name,
  brief,
  keywords,
  main,
  github,
  img,
}) => {
  return (
    <div>
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
