import { constants } from "buffer";
import React from "react";
import Select from "react-select/dist/declarations/src/Select";
import "./Gearlist.css";
import { WeaponSelect, LeftSideSelect, RightSideSelect } from "./Gearselect";

const header = [
  {
    gear: "",
    mt: "Spencer",
    ot: "Quacks",
    h1: "Finneah",
    h2: "Asgar",
    d1: "Jaspie",
    d2: "Yuuna",
    d3: "Kral",
    d4: "Nonoka",
  },
];

const weapon = [
  {
    gear: "Waffe",
    mt: WeaponSelect(),
    ot: WeaponSelect(),
    h1: WeaponSelect(),
    h2: WeaponSelect(),
    d1: WeaponSelect(),
    d2: WeaponSelect(),
    d3: WeaponSelect(),
    d4: WeaponSelect(),
  },
];

const leftside = [
  {
    gear: "Kopf",
    mt: LeftSideSelect(),
    ot: LeftSideSelect(),
    h1: LeftSideSelect(),
    h2: LeftSideSelect(),
    d1: LeftSideSelect(),
    d2: LeftSideSelect(),
    d3: LeftSideSelect(),
    d4: LeftSideSelect(),
  },
  {
    gear: "Brust",
    mt: LeftSideSelect(),
    ot: LeftSideSelect(),
    h1: LeftSideSelect(),
    h2: LeftSideSelect(),
    d1: LeftSideSelect(),
    d2: LeftSideSelect(),
    d3: LeftSideSelect(),
    d4: LeftSideSelect(),
  },
  {
    gear: "Beine",
    mt: LeftSideSelect(),
    ot: LeftSideSelect(),
    h1: LeftSideSelect(),
    h2: LeftSideSelect(),
    d1: LeftSideSelect(),
    d2: LeftSideSelect(),
    d3: LeftSideSelect(),
    d4: LeftSideSelect(),
  },
  {
    gear: "Füße",
    mt: LeftSideSelect(),
    ot: LeftSideSelect(),
    h1: LeftSideSelect(),
    h2: LeftSideSelect(),
    d1: LeftSideSelect(),
    d2: LeftSideSelect(),
    d3: LeftSideSelect(),
    d4: LeftSideSelect(),
  },
];
const rightside = [
  {
    gear: "Ohrring",
    mt: RightSideSelect(),
    ot: RightSideSelect(),
    h1: RightSideSelect(),
    h2: RightSideSelect(),
    d1: RightSideSelect(),
    d2: RightSideSelect(),
    d3: RightSideSelect(),
    d4: RightSideSelect(),
  },
  {
    gear: "Hals",
    mt: RightSideSelect(),
    ot: RightSideSelect(),
    h1: RightSideSelect(),
    h2: RightSideSelect(),
    d1: RightSideSelect(),
    d2: RightSideSelect(),
    d3: RightSideSelect(),
    d4: RightSideSelect(),
  },
  {
    gear: "Armschiene",
    mt: RightSideSelect(),
    ot: RightSideSelect(),
    h1: RightSideSelect(),
    h2: RightSideSelect(),
    d1: RightSideSelect(),
    d2: RightSideSelect(),
    d3: RightSideSelect(),
    d4: RightSideSelect(),
  },
  {
    gear: "Ring 1",
    mt: RightSideSelect(),
    ot: RightSideSelect(),
    h1: RightSideSelect(),
    h2: RightSideSelect(),
    d1: RightSideSelect(),
    d2: RightSideSelect(),
    d3: RightSideSelect(),
    d4: RightSideSelect(),
  },
  {
    gear: "Ring 2",
    mt: RightSideSelect(),
    ot: RightSideSelect(),
    h1: RightSideSelect(),
    h2: RightSideSelect(),
    d1: RightSideSelect(),
    d2: RightSideSelect(),
    d3: RightSideSelect(),
    d4: RightSideSelect(),
  },
];

function Table() {
  return (
    <div className="Table">
      <table>
        {header.map((val, key) => {
          console.log(key);

          return (
            <tr>
              <th>{val.gear}</th>
              <th>{val.mt}</th>
              <th>{val.ot}</th>
              <th>{val.h1}</th>
              <th>{val.h2}</th>
              <th>{val.d1}</th>
              <th>{val.d2}</th>
              <th>{val.d3}</th>
              <th>{val.d4}</th>
            </tr>
          );
        })}

        {weapon.map((val, key) => {
          console.log(key);

          return (
            <tr>
              <td>{val.gear}</td>
              <td>{val.mt}</td>
              <td>{val.ot}</td>
              <td>{val.h1}</td>
              <td>{val.h2}</td>
              <td>{val.d1}</td>
              <td>{val.d2}</td>
              <td>{val.d3}</td>
              <td>{val.d4}</td>
            </tr>
          );
        })}
        {leftside.map((val, key) => {
          console.log(key);

          return (
            <tr>
              <td>{val.gear}</td>
              <td>{val.mt}</td>
              <td>{val.ot}</td>
              <td>{val.h1}</td>
              <td>{val.h2}</td>
              <td>{val.d1}</td>
              <td>{val.d2}</td>
              <td>{val.d3}</td>
              <td>{val.d4}</td>
            </tr>
          );
        })}
        {rightside.map((val, key) => {
          console.log(key);

          return (
            <tr>
              <td>{val.gear}</td>
              <td>{val.mt}</td>
              <td>{val.ot}</td>
              <td>{val.h1}</td>
              <td>{val.h2}</td>
              <td>{val.d1}</td>
              <td>{val.d2}</td>
              <td>{val.d3}</td>
              <td>{val.d4}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
