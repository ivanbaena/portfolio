import React from 'react';
import AddProject from '../components/project/add-project';
import Projects from '../components/project';

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <div id='project-dashboard'>
        <AddProject />
        <Projects listview={true} />
      </div>
    </div>
  );
};

export default {
  component: Admin,
  loadData: () => {},
};
