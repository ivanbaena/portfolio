import React, { useContext } from 'react';
import Projects from '../components/project';

const HomePage: React.FC = (props: any) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Projects listview={false} />
    </div>
  );
};

const loadData = () => {};

export default {
  component: HomePage,
  loadData: loadData,
};
