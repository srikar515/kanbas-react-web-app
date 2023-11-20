import styles from './index.module.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { React } from 'react';

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="d-flex flex-row">
      <div className={styles.main_content}>
        <h1>Dashboard</h1>
        <hr />

        <div className="container" style={{ marginLeft: '30px' }}>
          <h3>Add/Update a Course</h3>
          <div className="row">
            <div className="col">
              <input
                value={course.name}
                className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                placeholder="Course Name"
              />
            </div>

            <div className="col">
              <input
                value={course.number}
                className="form-control"
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
                placeholder="Course Number"
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <input
                value={course.description}
                className="form-control"
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
                placeholder="Course Description"
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label for="startDate">Start Date</label>
              <input
                value={course.startDate}
                className="form-control"
                type="date"
                id="startDate"
                onChange={(e) =>
                  setCourse({ ...course, startDate: e.target.value })
                }
                placeholder="Start Date"
              />
            </div>
            <div className="col">
              <label for="endDate">End Date</label>
              <input
                value={course.endDate}
                className="form-control"
                type="date"
                id="endDate"
                onChange={(e) =>
                  setCourse({ ...course, endDate: e.target.value })
                }
                placeholder="End Date"
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <input
                value={course.image}
                className="form-control"
                onChange={(e) =>
                  setCourse({ ...course, image: e.target.value })
                }
                placeholder="Enter image URL"
              />
            </div>
          </div>
          <br />

          <button
            className="btn btn-success"
            style={{ marginRight: '5px' }}
            onClick={addNewCourse}
          >
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
          <br />
          <br />
          <br />
          <h2>Published Courses ({`${courses.length}`})</h2>
          <hr />
          <div
            className={`d-flex flex-row flex-wrap justify-content-around ${styles.cardContainer}`}
          >
            {courses.map((course) => (
              <Card
                style={{
                  width: '270px',
                  marginBottom: '30px',
                  marginRight: 'auto',
                }}
                key={course._id}
              >
                <Card.Img variant="top" src={`${course.image}`} />
                <Card.Body>
                  <Card.Text
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      fontWeight: 'bold',
                    }}
                  >
                    <Link to={`/Kanbas/Courses/${course._id}`}>
                      {course.name}
                    </Link>
                  </Card.Text>
                  <Card.Text>{course.description}</Card.Text>
                  <button
                    className="btn btn-warning"
                    style={{ marginRight: '5px' }}
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;