import React from "react";
import { Button as BSButton } from "react-bootstrap";

type ButtonProps = {
  text: string;
};
export const Button = (props: ButtonProps) => {
  return <BSButton variant="primary">{props.text}</BSButton>;
};
