import React from 'react';

type Button2Props = {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>
}

const Button2 = ({ total, setTotal }: Button2Props) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button2;