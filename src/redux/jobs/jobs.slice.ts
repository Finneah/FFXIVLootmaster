import { createAction, createSlice, Action, AnyAction } from "@reduxjs/toolkit";
import { baseSliceLoadingReducer, baseSliceErrorReducer } from "../base.reducers";
import { fetchAllJobs } from "./jobs.actions";
import { JobsSliceState } from "./jobs.types";

export const initialState = {
  data: [],
  loading: [],
  error: null,
} as JobsSliceState;

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
      const data = action.payload
      console.log("fetchAllJobs",   action.payload);
      state.data =data

      // action is inferred correctly here if using TS
    });
    builder.addCase(fetchAllJobs.pending, baseSliceLoadingReducer);
    builder.addCase(fetchAllJobs.rejected, baseSliceErrorReducer);

    // and provide a default case if no other handlers matched
  },
});


