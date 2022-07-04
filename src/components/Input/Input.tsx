import React from 'react';
import './Input.css';

interface InputProps {
  placeholder?: string;
}

const Input = ({...props}: InputProps & React.HTMLProps<HTMLInputElement>) => {
  return <input {...props} />
}

export default Input;