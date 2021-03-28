import React from 'react';
import { useMutation } from '@apollo/client';
import { POST_PROJECT } from '../../../mutations';
import Form from '../../form';

const AddProject: React.FC = () => {
  const [addProject, { data }] = useMutation(POST_PROJECT);

  return (
    <div>
      <h4>Create a Project</h4>
      <Form
        inputs={['name', 'brief', 'keywords', 'github', 'main', 'img']}
        mutationCallback={addProject}
        data={data && data}
      />
    </div>
  );
};

export default AddProject;
