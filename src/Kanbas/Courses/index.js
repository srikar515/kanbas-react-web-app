import React from 'react';
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from 'react-router-dom';
import CourseNavigation from './CourseNavigation';
import CoursesModules from './CoursesModules';
import CoursesAssignments from './CoursesAssignments';
import CourseAssignmentEditor from './CoursesAssignments/CourseAssignmentEditor';
import CoursesHome from './CoursesHome';
import { FaBars } from 'react-icons/fa6';
import styles from '../../index.css';

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, listcourses, id, screen] = pathname.split('/');
  const course = courses?.find((course) => course._id === courseId);

  return (
    <div>
      <div className="navigation-bar" style={{ marginTop: '10px' }}>
        <nav className={`d-none d-md-block ${styles.wd_breadcrumb}`}>
          <ol class="breadcrumb">
            {course?.name && (
              <li class="breadcrumb-item">
                <FaBars
                  style={{
                    color: '#b52828',
                    marginRight: '10px',
                    marginLeft: '20px',
                  }}
                ></FaBars>
                <Link
                  to={`/Kanbas/Courses/${courseId}`}
                  style={{ color: '#b52828' }}
                >
                  {course.name}
                </Link>
              </li>
            )}
            <span style={{ color: 'grey', margin: '0 5px' }}> &gt; </span>
            {screen && (
              <li class="breadcrumb-item active" aria-current="page">
                <Link to={pathname} style={{ color: 'black' }}>
                  {screen}
                </Link>
              </li>
            )}
          </ol>
        </nav>
        <hr style={{ marginLeft: '20px', marginRight: '20px' }} />
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: '300px',
            top: '50px',
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<CoursesHome />} />
            <Route path="Modules" element={<CoursesModules />} />
            <Route path="Assignments" element={<CoursesAssignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<CourseAssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;