import React from "react";

type ButtonProps = {
  text: string;
  onClick: (param: any) => void;
};
export const Button = ({ text, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};
