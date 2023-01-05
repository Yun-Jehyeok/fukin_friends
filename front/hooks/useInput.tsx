import React, { useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  return { value, onChange };
};
