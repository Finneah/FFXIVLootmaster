import { GearSourceEnum } from "../types/Gear";
import { Roles, RaidMember } from "../types/RaidMember";
const spencer: RaidMember = {
  name: "Spencer",
  role: Roles.MT,
  equip: {
    waffe: { name: GearSourceEnum.ASPHODELOS, ilvl: "555" },
    kopf: { name: GearSourceEnum.ASPHODELOS, ilvl: "555" },
  },
};
const finneah: RaidMember = {
  name: "Finneah",
  role: Roles.MT,
  equip: {
    waffe: { name: GearSourceEnum.ASPHODELOS, ilvl: "555" },
    kopf: { name: GearSourceEnum.ENDSINGER_EX, ilvl: "555" },
  },
};
export const raidMember: RaidMember[] = [spencer, finneah];
