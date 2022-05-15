import { createSelector } from "@reduxjs/toolkit";


import { actionIsLoading } from "../base.reducers";

import { RootState } from "../root/root.types";
import { fetchAllJobs } from "./jobs.actions";

export const jobsFetchLoadingSelector = createSelector(
  (state: RootState) => state.jobs,
  (jobsState) => actionIsLoading(jobsState.loading, fetchAllJobs)
);
export const jobsSelector = createSelector(
  (state: RootState) => state.jobs,
  (jobsState) => jobsState.data
);
