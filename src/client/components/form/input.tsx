import React from 'react';
import { refsObj } from './types';

interface InputProps {
  refs: refsObj;
  inputs: string[];
  textAreas: string[];
  key?: number;
}
const Input: React.FC<InputProps> = ({
  refs,
  inputs,
  textAreas,
}: InputProps) => {
  const renderInputs = () => {
    return inputs.map((input, i) => {
      return (
        <div className='field' key={i}>
          <label className='label'>{input}</label>
          <div className='control'>
            {textAreas.includes(input) ? (
              <textarea
                ref={refs[input]}
                className='input-textarea'
                placeholder={`${input}-textarea`}
                name={input}
              ></textarea>
            ) : (
              <input
                ref={refs[input]}
                className='input'
                type='text'
                placeholder={`${input}-text`}
                name={input}
              />
            )}
          </div>
        </div>
      );
    });
  };
  return <>{renderInputs()}</>;
};

export default Input;
