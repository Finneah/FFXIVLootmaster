import { configureStore } from "@reduxjs/toolkit";
import {jobsSlice} from "./jobs/jobs.slice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  jobs: jobsSlice.reducer,
});
export const store = configureStore({
  reducer: reducers,
});
