import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockJobs } from "./jobs.test.data";
const privateKey =
  "d14fb88dc43f41a1987cd4209425a64de0bdf791c891490281e81713f3012a88";

export const fetchAllJobs = createAsyncThunk("jobs/fetchAllJobs", async () => {
  let url = "https://xivapi.com/ClassJob" + "?private_key=" + privateKey;
  let response = axios.get(url).then((response) => {
    // return response.data;
    return mockJobs;
  });

  return response;
});
