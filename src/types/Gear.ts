export enum Slots {
  WAFFE = "Waffe",
  KOPF = "Kopf",
  BRUST = "Brust",
  BEINE = "Beine",
  FUESE = "Füße",
  OHRRINGE = "Ohrring",
  HALS = "Hals",
  ARMSCHIENE = "Armschiene",
  RING_LEFT = "Ring (links)",
  RING_RIGHT = "Ring (rechts)",
}
export enum GearSourceEnum {
  STEINCHEN = "Steinchen",
  STEINCHEN_PLUS = "Steinchen+",
  CRAFTED = "Crafted",
  CRAFTED_PLUS = "Crafted+",
  ASPHODELOS = "Asphodelos",
  NORMAL_RAID = "Normal Raid",
  ENDSINGER_EX = "Endsinger EX Trial",
  DSR_ULTIMATE = "DSR Ultimate",
  HYDAELYN_EX = "Hydaelyn EX Trial",
  ALLI_RAID="Alliance Raid",
  ZODIARK_EX="Zodiark EX Trial"
}

export enum AcceciorSource {}

// TODO iLvl Enum fertig schreiben
export enum ItemLevel {
  i600 = "iLvl 600",
}

export interface WeaponSource extends GearSource {
  name: GearSourceEnum;
}
export interface GearSource {
  name: GearSourceEnum;
  ilvl: string; // TODO iLvl Enum fertig schreiben
}

export type Gear = {
  waffe: GearSource;
  kopf: GearSource;
  // TODO erweitern
};
