import React from "react";

type ButtonProps = {
  children: React.ReactNode; //In ReactJS with TypeScript, ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types. (Dev community)
  onClick: () => void;
};

//OU:
// type ButtonProps2 = React.PropsWithChildren<{ 
//   onClick: () => void; (Neste caso, não precisa do children)
// }>;

//OU
// type ButtonProps3 = React.ComponentProps<"button">

const Button = ({children, onClick}: ButtonProps) => { //Aqui posso utilizar props:ButtonProps ou apenas desestruturar as props como nesse ex.
  return <button onClick={onClick}>{children}</button>; // Se utilizar props:ButtonProps, preciso colocar props.onClick, props.children...
};

export default Button;
