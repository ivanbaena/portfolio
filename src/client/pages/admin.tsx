import React from 'react';
import AddProject from '../components/project/add-project';

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <AddProject />
    </div>
  );
};

export default {
  component: Admin,
  loadData: () => {},
};
