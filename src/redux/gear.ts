import { GearSourceEnum, GearSource, WeaponSource } from "../types/Gear";

// iLvl 570 - 605
const baseGear: GearSource[] = [
  { name: GearSourceEnum.CRAFTED, ilvl: "iLvL 600" },
  { name: GearSourceEnum.CRAFTED_PLUS, ilvl: "iLvL 590" },
  { name: GearSourceEnum.STEINCHEN, ilvl: "iLvL 590" },
  { name: GearSourceEnum.STEINCHEN_PLUS, ilvl: "iLvL 580" },
];

const baseAcessiors: GearSource[] = [
  ...baseGear,
  { name: GearSourceEnum.ASPHODELOS, ilvl: "iLvL 600" },
  { name: GearSourceEnum.NORMAL_RAID, ilvl: "iLvL 580" },
];
export const weapons: WeaponSource[] = [
  ...baseGear,
  { name: GearSourceEnum.ASPHODELOS, ilvl: "iLvL 605" },
  { name: GearSourceEnum.DSR_ULTIMATE, ilvl: "iLvL 605" },
  { name: GearSourceEnum.ENDSINGER_EX, ilvl: "iLvL 595" },
  { name: GearSourceEnum.HYDAELYN_EX, ilvl: "iLvL 580" },
];

export const leftside: GearSource[] = [
  ...baseAcessiors,
  { name:GearSourceEnum.ALLI_RAID, ilvl: "iLvL 590" },
];

export const rightside: GearSource[] = [
  ...baseAcessiors,
  { name:GearSourceEnum.ZODIARK_EX , ilvl: "iLvL 580" },
];
