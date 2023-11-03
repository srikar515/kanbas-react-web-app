import db from "../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div style={{display:"flex",margin:"20px"}}>
        <div style={{flexGrow:"1"}}>
            <label className="form-label">Student Names</label>
            <select className="form-select">
                    <option>Srikar</option>
                    <option>Quizzes</option>
                    <option>Exams</option>
                    <option>Project</option>
                  </select>
        </div>
        <div style={{flexFlow:"1"}}>
            <label className="form-label">Assignment Names</label>
            <select className="form-select">
                    <option>A1</option>
                    <option>A2</option>
                    <option>A3</option>
                    <option>A4</option>
                  </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table" style={{border:"1px solid"}}>
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
            </tbody></table>
      </div></div>);
}
export default Grades;
