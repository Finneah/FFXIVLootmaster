import { configureStore } from "@reduxjs/toolkit";
import {jobsSlice} from "./jobs/jobs.slice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  jobs: jobsSlice.reducer,
});
export const store = configureStore({
  reducer: reducers,
});


 // const classJobs: (ClassJob | undefined)[] = useSelector(
  //   (state: RootState) => state.jobs.data
  // );

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllJobs());
  // }, []);

  // const ClassJobList = () => {
  //   console.log("classJobs", classJobs);
  //   if (!classJobs || classJobs.length === 0) {
  //     return null;
  //   }
  //   return (
  //     <ListGroup>
  //       {classJobs.map((classJob, key) => (
  //         <ListGroup.Item>{classJob?.shortName} </ListGroup.Item>
  //       ))}
  //     </ListGroup>
  //   );
  // };
