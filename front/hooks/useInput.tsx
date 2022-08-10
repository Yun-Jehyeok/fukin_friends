import React, { useState } from 'react';

export const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  return { value, onChange };
};
