import { idText } from "typescript";

type weaponType = {
  name: string;
  label: string;
  ilvl: string;
};
// iLvl 570 - 605
export const weapons: weaponType[] = [
  { name: "Asphodelos", label:"Asphodelos",ilvl: "iLvL 605" },
  { name: "DSR Ultimate", label:"DSR Ultimate",ilvl: "iLvL 605" },
  { name: "Steinchen+", label:"Steinchen+",ilvl: "iLvL 600" },
  { name: "Endsinger EX Trial", label:"Endsinger EX Trial",ilvl: "iLvL 595" },
  { name: "Crafted+", label:"Crafted+",ilvl: "iLvL 590" },
  { name: "Steinchen", label:"Steinchen",ilvl: "iLvL 590" },
  { name: "Crafted", label:"Crafted",ilvl: "iLvL 580" },
  { name: "Hydaelyn EX Trial", label:"Hydaelyn EX Trial",ilvl: "iLvL 580" },
];

export const leftside: weaponType[] = [
  { name: "Asphodelos", label:"Asphodelos",ilvl: "iLvL 605" },
  { name: "Steinchen+", label:"Steinchen+",ilvl: "iLvL 600" },
  { name: "Crafted+", label:"Crafted+",ilvl: "iLvL 590" },
  { name: "Alliance Raid", label:"Alliance Raid",ilvl: "iLvL 590" },
  { name: "Steinchen", label:"Steinchen",ilvl: "iLvL 590" },
  { name: "Crafted", label:"Crafted",ilvl: "iLvL 580" },
  { name: "Normal Raid", label:"Normal Raid",ilvl: "iLvL 580" },
  
];

export const rightside: weaponType[] = [
  { name: "Asphodelos", label:"Asphodelos",ilvl: "iLvL 605" },
  { name: "Steinchen+", label:"Steinchen+",ilvl: "iLvL 600" },
  { name: "Crafted+", label:"Crafted+",ilvl: "iLvL 590" },
  { name: "Steinchen", label:"Steinchen",ilvl: "iLvL 590" },
  { name: "Crafted", label:"Crafted",ilvl: "iLvL 580" },
  { name: "Zodiark EX Trial", label:"Zodiark EX Trial",ilvl: "iLvL 580" },
  { name: "Normal Raid", label:"Normal Raid",ilvl: "iLvL 580" }
];