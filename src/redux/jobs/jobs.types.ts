import { BaseSliceState } from "../base.types";
export interface ClassJob {
  name: string;
  shortName: string;
  role: JobRole;
}
export enum JobRole{
    TANK="Tank",
    HEALER="Heiler",
    RANGED_PH="Physical Ranged",
    RANGED_MG="Magical Ranged",
    MEELE="Meele"
}
export type JobsSliceState = BaseSliceState<ClassJob[]>;
