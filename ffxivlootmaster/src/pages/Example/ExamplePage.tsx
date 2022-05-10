import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { weapons } from "../../data/weapons";

export const ExamplePage: React.FunctionComponent = () => {
  const [exampleText, setExampleText] = useState("hallo dude");
  useEffect(() => {
    console.log(exampleText, "has changed");
  }, [exampleText]);

  const handleButtonClick = () => {
    setExampleText("Hallo Yunna");
  };
  return (
    <>
      {weapons.map((weapon) => (
        <li>{weapon.test}</li>
      ))}
      <Button text={exampleText} onClick={handleButtonClick} />
    </>
  );
};
