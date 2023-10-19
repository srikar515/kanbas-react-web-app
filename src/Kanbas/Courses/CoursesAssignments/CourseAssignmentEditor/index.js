import { Button } from 'react-bootstrap';
import KanbasNavigation from '../../../KanbasNavigation';
import CourseTopNavBar from '../../CoursesHome/CourseTopNavBar';
import CourseNavigation from '../../CourseNavigation';
import styles from '../../../../index.css';

const CourseAssignmentEditor = () => {
  return (
    <div className="d-flex flex-row">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <CourseTopNavBar />
        <div className={styles.wd_flex_row_container}>
          <div className="d-flex">
            <CourseNavigation />
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
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ marginRight: '3px' }}
                    ></i>
                    Published
                  </p>
                  <Button
                    className="btn"
                    style={{ background: '#eeeeee', height: '38px' }}
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </Button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Assignment Name</label>
                <input
                  type="text"
                  className="form-control"
                  value="A1 - ENV + HTML"
                />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="3">
                  This assignment describes how to install the development
                  environment for creating and developing the web applications.
                </textarea>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-2">Points</div>
                  <div className="col-6">
                    <input type="text" className="form-control" value="100" />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Assignment Group</div>
                  <div className="col-6">
                    <select className="form-select">
                      <option>Assignments</option>
                      <option>Quizzes</option>
                      <option>Exams</option>
                      <option>Project</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Display Grade as</div>
                  <div className="col-6">
                    <select className="form-select">
                      <option>Percentage</option>
                      <option>Marks</option>
                      <option>GPA</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Don't count this assignment towards the final grade
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Submission Type</div>
                  <div className="col-6">
                    <select className="form-select">
                      <option>Online</option>
                      <option>Offline</option>
                    </select>
                    <br />
                    <strong>Online Entry Options</strong>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label"> Text Entry </label>
                    </div>
                    <br />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                      />
                      <label className="form-check-label"> Website URL </label>
                    </div>
                    <br />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                      />
                      <label className="form-check-label">
                        {' '}
                        Media Recordings{' '}
                      </label>
                    </div>
                    <br />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        {' '}
                        Student Annotation{' '}
                      </label>
                    </div>
                    <br />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label"> File Uploads </label>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Submission Attempts</div>
                  <div className="col-6">
                    <select className="form-select">
                      <option>Unlimited</option>
                      <option>Limited</option>
                      <option>None</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Plaigarism Review</div>
                  <div className="col-6">
                    <select className="form-select">
                      <option>None</option>
                      <option>Yes</option>
                      <option>Done</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Group Assignment</div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        This is a group assignment
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Peer Reviews</div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        {' '}
                        Require Peer Reviews{' '}
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-2">Assign</div>
                  <div className="col-6">
                    Assign To
                    <select className="form-select">
                      <option selected>Everyone</option>
                      <option>Yes</option>
                      <option>Done</option>
                    </select>
                    <br />
                    Due
                    <input type="date" className="form-control" />
                    <br />
                    <div className="row">
                      <div className="col-3">
                        Available From{' '}
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-3">
                        Until
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <hr />
                <div className="row">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Notify users that this content has changed.
                      </label>
                    </div>
                  </div>
                  <div className="col-6 float-end">
                    <button className="btn" style={{ background: '#eeeeee' }}>
                      Cancel
                    </button>
                    <button className="btn btn-danger">Save</button>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignmentEditor;
