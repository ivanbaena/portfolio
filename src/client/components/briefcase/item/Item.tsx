import React from 'react';
import styles from './Item.module.scss';

export const Item = ({
  project,
  description,
  keywords,
}: {
  project: string;
  description: string;
  keywords: string[];
}) => {
  return (
    <div className={`${styles.item} ${styles.border}`}>
      <h1>{project}</h1>
      <p>{description}</p>
      <ul>
        {keywords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};
