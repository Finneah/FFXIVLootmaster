import { constants } from "buffer";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select/dist/declarations/src/Select";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchAllJobs } from "../../redux/jobs/jobs.actions";
import { ClassJob } from "../../redux/jobs/jobs.types";
import { RootState } from "../../redux/root/root.types";
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

export const Gearlist = () => {
  const classJobs: (ClassJob | undefined)[] = useSelector(
    (state: RootState) => state.jobs.data
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllJobs());
  }, []);

  const ClassJobList = () => {
    console.log("classJobs", classJobs);
    if (!classJobs || classJobs.length === 0) {
      return null;
    }
    return (
      <ListGroup>
        {classJobs.map((classJob, key) => (
          <ListGroup.Item>{classJob?.shortName} </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };
  return (
    <div className="Table">
      <ClassJobList />
      <table>
        {header.map((val, key) => {
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
};
