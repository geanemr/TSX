import React from 'react';

type Button = {
  aumentar: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ aumentar }: Button) => {
  return (
    <button onClick={() => aumentar((setaumentar) => setaumentar + 1)}>
      Number
    </button>
  );
};

export default Button;