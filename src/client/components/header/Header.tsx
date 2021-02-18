import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const linksData = [
  { name: 'ivan', path: '/' },
  { name: 'work', path: '/work' },
  { name: 'about', path: '/about' },
];
export const Header = () => {
  useEffect(() => {
    console.log('mounted header');
  }, []);

  const renderNavLinks = () => {
    return linksData.slice(1).map((item: any, index: number) => {
      return (
        <Link className={styles.navitem} key={index} to={item.path}>
          {item.name}
        </Link>
      );
    });
  };
  return (
    <header className={styles.header}>
      <Link to={linksData[0].path} className={styles.logo}>
        {linksData[0].name}
      </Link>
      <nav className={styles.nav}>{renderNavLinks()}</nav>
    </header>
  );
};
