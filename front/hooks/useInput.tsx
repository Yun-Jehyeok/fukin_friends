import React, { useState } from 'react';

export const useStringInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  return { value, onChange };
};

export const useNumberInput = (initialValue: number) => {
  const [numVal, setNumVal] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setNumVal(numVal);
  };

  return { numVal, onChange };
};
