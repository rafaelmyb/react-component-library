import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

const Button = ({children, ...props}: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>
}

export default Button;