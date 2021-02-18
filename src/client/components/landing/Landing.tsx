import React from 'react';

import styles from './Landing.module.scss';

export const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.textbox}>
        <h1 className={styles.heading}>
          <span>Ivan Baena </span>
          <span>Front End Developer</span>
        </h1>
      </div>
    </div>
  );
};
