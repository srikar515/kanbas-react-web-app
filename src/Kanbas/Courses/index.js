import db from "../../Kanbas/Database";
import {
    useParams,
    Routes,
    Route,
    Navigate,
    useLocation,
    Link,
  } from 'react-router-dom';
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import styles from '../../index.css';
import {FaBars} from "react-icons/fa6";
import CoursesHome from './CoursesHome';
import CoursesModules from './CoursesModules';
import CoursesAssignments from './CoursesAssignments';
import CourseAssignmentEditor from './CoursesAssignments/CourseAssignmentEditor';


function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split('/');
  const course = db.courses.find((course) => course._id === courseId);
  const separatorStyle = {
    color: 'gray',
    margin: '0 5px',
  };
  return (
    <div>
        <div className="navigation-bar" style={{ marginTop: '10px' }}>
        <nav className={`d-none d-md-block ${styles.wd_breadcrumb}`}>
          <ol class="breadcrumb">
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
            <span style={separatorStyle}> &gt; </span>
            <li class="breadcrumb-item active" aria-current="page">
              <Link to={pathname} style={{ color: 'black' }}>
                {screen}
              </Link>
            </li>
          </ol>
        </nav>
        <hr style={{ marginLeft: '20px', marginRight: '20px' }} />
        </div>
      <div class="course-flex">
        <CourseNavigation />
        <div style={{flexGrow:"1"}}>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<CoursesHome />} />
                <Route path="Modules" element={<CoursesModules />} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                <Route path="Assignments" element={<CoursesAssignments />} />
                <Route
                    path="Assignments/:assignmentId"
                    element={<CourseAssignmentEditor />}
                />
                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
                <Route path="People" element={<h1>People</h1>} />
                <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                <Route path="Discussions" element={<h1>Discussions</h1>} />
                <Route path="Announcements" element={<h1>Announcements</h1>} />
                <Route path="Pages" element={<h1>Pages</h1>} />
                <Route path="Files" element={<h1>Files</h1>} />
                <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                <Route path="Settings" element={<h1>Settings</h1>} />
            </Routes>
            </div>
       </div>
    </div>
  );
}
export default Courses;