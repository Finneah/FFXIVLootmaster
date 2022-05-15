import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { weapons } from "../../redux/gear";

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
        <li>{weapon.name}</li>
      ))}
      <Button text={exampleText} onClick={handleButtonClick} />
    </>
  );
};
