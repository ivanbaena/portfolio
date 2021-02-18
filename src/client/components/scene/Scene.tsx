import React, { ReactChildren } from 'react';
import styles from './Scene.module.scss';
export const Scene = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: any;
  style?: any;
}): JSX.Element => (
  <div id='scene' className={`${styles.scene} ${className}`} style={style}>
    {children}
  </div>
);
