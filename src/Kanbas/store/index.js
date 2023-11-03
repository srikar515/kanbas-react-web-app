import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from '../Courses/CoursesModules/modulesReducer';
import assignmentsReducer from '../Courses/CoursesAssignments/assignmentsReducer';

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});

export default store;