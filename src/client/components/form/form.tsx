import React, { useRef, FormEvent } from 'react';

interface FormProps {
  inputs: string[];
  mutationCallback: any;
  data?: any;
}

type refsObj =
  | {
      [key: string]: React.MutableRefObject<HTMLInputElement | null>;
    }
  | { [key: string]: any };

const renderInputs = (refs: refsObj, inputs: string[]) => {
  const ex = useRef();
  return inputs.map((input, i) => {
    return (
      <div className='field' key={i}>
        <label className='label'>{input}</label>
        <div className='control'>
          <input
            ref={refs[input]}
            className='input'
            type='text'
            placeholder={`${input}-text`}
            name={input}
          />
        </div>
      </div>
    );
  });
};

const Form: React.FC<FormProps> = ({ inputs, mutationCallback }) => {
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
    mutationCallback({ variables: obj });
  };
  return (
    <div className='columns'>
      <form
        className='column is-half is-offset-one-quarter'
        onSubmit={handleOnSubmit}
      >
        {renderInputs(refs, inputs)}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
