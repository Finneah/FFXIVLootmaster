import React from "react";
import { Button } from "../../components/Button/Button";
import { weapons } from "../../data/weapons";

export const ExamplePage = () => {
  return (
    <>
      {weapons.map((weapon) => (
        <li>{weapon.test}</li>
      ))}
      <Button text="content goes here" />
    </>
  );
};
