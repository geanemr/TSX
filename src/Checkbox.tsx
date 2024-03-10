import React from 'react';

const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked);
  };

  return (
    <label>
      <input type="checkbox" checked={value} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;
