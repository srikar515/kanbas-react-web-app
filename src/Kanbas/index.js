import KanbasNavigation from './KanbasNavigation';
import Dashboard from './Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Profile';
import Calendar from './Calendar';
import Commons from './Commons';
import Help from './Help';
import History from './History';
import Inbox from './Inbox';
import Studio from './Studio';
import Courses from './Courses';
import CoursesHome from './Courses/CoursesHome';
import CoursesModules from './Courses/CoursesModules';
import CoursesAssignments from './Courses/CoursesAssignments';
import CourseAssignmentEditor from './Courses/CoursesAssignments/CourseAssignmentEditor';
import Signin from './Users/signin';
import Account from './Users/account';
import UserTable from './Users/table';
import Signup from './Users/signup';
import { useState,useEffect } from 'react';
import db from './Database';
import store from './store';
import { Provider } from 'react-redux';
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: '',
    number: '',
    description: '',
    startDate: '',
    endDate: '',
    image: '',
  });

  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Profile" element={<Profile />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Commons" element={<Commons />} />
            <Route path="Help" element={<Help />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="History" element={<History />} />
            <Route path="Inbox" element={<Inbox />} />
            <Route path="Studio" element={<Studio />} />
            <Route path="signin" element={<Signin />} />
            <Route path="account" element={<Account />} />
            <Route path="account/:id" element={<Account />} />
            <Route path="users" element={<UserTable />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;