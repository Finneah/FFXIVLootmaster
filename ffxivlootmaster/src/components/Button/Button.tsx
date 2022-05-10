import React from "react";
import { Button as BSButton } from "react-bootstrap";

type ButtonProps = {
  text: string;
  onClick:()=>void
};
export const Button = (props: ButtonProps) => {
  return <BSButton onClick={props.onClick} variant="primary">{props.text}</BSButton>;
};
