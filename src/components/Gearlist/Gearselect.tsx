import React from "react";
import Select from "react-select";
import "./select.css";
import { weapons, leftside, rightside } from "../../data/gear";

function WeaponSelect() {
  return (
    <div>
      <Select options={weapons}></Select>
    </div>
  );
}

function LeftSideSelect() {
  return (
    <div>
      <Select options={leftside}></Select>
    </div>
  );
}

function RightSideSelect() {
  return (
    <div>
      <Select options={rightside}></Select>
    </div>
  );
}

export { WeaponSelect, LeftSideSelect, RightSideSelect };
