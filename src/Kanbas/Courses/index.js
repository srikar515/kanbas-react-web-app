import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css"


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1>{course.name}</h1>
      <hr/>
      <div class="course-flex">
        <CourseNavigation />
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<h1>Home</h1>} />
                <Route path="Modules" element={<h1>Modules</h1>} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                <Route path="Assignments" element={<h1>Assignments</h1>} />
                <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
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