import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" name={label} id={label} {...props} />
    </div>
  );
};

export default Input;
