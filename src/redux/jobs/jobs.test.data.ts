import { ClassJob, JobRole } from "../../types/Job";


export const mockJobs: ClassJob[] = [
  { name: "Krieger", shortName: "WAR", role: JobRole.TANK },{
    name: "Weißmagier", shortName: "WHM", role: JobRole.HEALER
  },
];
