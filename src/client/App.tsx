import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from './components/header';

import styles from './App.module.css';

const App = ({ route }: any) => {
  return (
    <div className={styles.app}>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
