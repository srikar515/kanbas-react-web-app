import { Button } from 'react-bootstrap';
import styles from '../../../../index.css';
import db from '../../../Database';
import { FaCircleCheck, FaEllipsisVertical } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from '../assignmentsReducer';
import { useDispatch, useSelector } from 'react-redux';

const CourseAssignmentEditor = () => {
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { assignmentId, courseId } = useParams();

  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="flex-grow-1" style={{ margin: '20px 30px' }}>
      <div className={styles.wd_flex_row_container}>
        <div className="d-flex">
          <div
            className="flex-grow-1"
            style={{ marginLeft: '30px', marginRight: '30px' }}
          >
            <div className="wd-flex-row-container">
              <div className="wd-flex-grow-1"></div>
              <div className="d-flex float-end main-content-control">
                <div className="flex-grow-1"></div>
                <p
                  style={{
                    marginTop: '7px',
                    marginRight: '10px',
                    color: 'green',
                  }}
                >
                  <FaCircleCheck style={{ marginRight: '3px' }} />
                  Published
                </p>
                <Button style={{ background: '#eeeeee', height: '38px' }}>
                  <FaEllipsisVertical style={{ color: 'black' }} />
                </Button>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={assignment.title}
                placeholder="Enter title"
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, title: e.target.value })
                  )
                }
              />
            </div>
            <div className="mb-3">
              <textarea
                value={assignment.description}
                placeholder="Enter the Assignment Description"
                className="form-control"
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      description: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2">Points</div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    value={assignment.points}
                    placeholder="Enter the points"
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          points: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-2">Due</div>
                <div className="col-6">
                  <input
                    type="date"
                    className="form-control"
                    value={assignment.dueDate}
                  />
                  <br />
                  <div className="row">
                    <div className="col-3">
                      Available From
                      <input
                        type="date"
                        className="form-control"
                        value={assignment.availableFrom}
                      />
                    </div>
                    <div className="col-3">
                      Available Until
                      <input
                        type="date"
                        className="form-control"
                        value={assignment.availableUntil}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div className="col float-end">
                <button className="btn">
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </Link>
                </button>
                <button className="btn btn-danger" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignmentEditor;