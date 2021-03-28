import React, { useRef, FormEvent } from 'react';
import { refsObj } from './types';
import Input from './input';

interface FormProps {
  inputs: string[];
  textAreas: string[];
  mutationCallback: any;
  data?: any;
}

const Form: React.FC<FormProps> = ({ inputs, mutationCallback, textAreas }) => {
  let refs: refsObj = {};
  for (const input of inputs) {
    refs = { ...refs, [input]: useRef<HTMLInputElement | null>() };
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    let obj = {};
    for (const ref in refs) {
      if (ref === 'keywords') {
        obj = { ...obj, [ref]: refs[ref].current?.value.split(',') };
      } else obj = { ...obj, [ref]: refs[ref].current?.value };
    }
    console.log(obj);
    mutationCallback({ variables: obj });
  };
  return (
    <div className='columns'>
      <form
        className='column is-half is-offset-one-quarter'
        onSubmit={handleOnSubmit}
      >
        <Input refs={refs} inputs={inputs} textAreas={textAreas} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
