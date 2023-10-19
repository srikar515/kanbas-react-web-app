import { Link } from 'react-router-dom';
import '../../../../index.css';
import './index.module.css';

const CourseAssignmentContent = () => {
  return (
    <div
      className="flex-grow-1"
      style={{ marginLeft: '30px', marginRight: '30px' }}
    >
      <div className="d-flex flex-row">
        <div className="search flex-grow-1">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search for an Assignment"
          />
        </div>
        <div className="d-flex float-end main-content-control">
          <div className="flex-grow-1"></div>
          <button className="btn" style={{ background: '#eeeeee' }}>
            <i className="fa fa-plus"></i>Group
          </button>
          <button className="btn btn-danger">
            <i className="fa fa-plus"></i>Module
          </button>
          <button
            className="btn"
            style={{ background: '#eeeeee', height: '38px' }}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>

      <hr />
      <ul className="wd-flex-grow-1 list-group module-list">
        <li className="list-group-item list-group-item-secondary">
          <i className="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
          <span>
            <strong>Assignments</strong>
          </span>
          <div className="float-end">
            <button
              className="btn rounded-pill"
              style={{ background: '#eeeeee', marginRight: '20px' }}
            >
              40% of Total
            </button>
            <i className="fa-solid fa-plus" style={{ marginRight: '20px' }}></i>
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </li>
        <ul className="list-group" style={{ borderRadius: '0' }}>
          <ul className="list-group" style={{ borderRadius: '0' }}>
            <li className="list-group-item">
              <i
                className="fa fa-grip-vertical"
                style={{ marginRight: '20px' }}
              ></i>
              <i className="fa fa-book"></i>
              <h6 style={{ display: 'inline' }}>
                <strong>
                  <Link
                    to="/Kanbas/Courses/Assignments/AssignmentEditor"
                    style={{ color: 'black' }}
                  >
                    A1 SETUP
                  </Link>
                </strong>
              </h6>
              <div
                style={{ marginLeft: '70px', color: '#686464', width: '600px' }}
              >
                <p style={{ fontSize: '15px', marginBottom: '1px' }}>
                  Week - 0 - SETUP - Week starting on Monday, September 5th
                  (9/5/2022) Module |
                </p>
                <p>Due Sep 18, 2022 at 11:59pm | 100pts</p>
              </div>

              <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li className="list-group-item">
              <i
                className="fa fa-grip-vertical"
                style={{ marginRight: '20px' }}
              ></i>
              <i className="fa fa-book"></i>
              <h6 style={{ display: 'inline' }}>
                <strong>
                  <Link
                    to="/Kanbas/Courses/Assignments/AssignmentEditor"
                    style={{ color: 'black' }}
                  >
                    A2 HTML
                  </Link>
                </strong>
              </h6>
              <div
                style={{ marginLeft: '70px', color: '#686464', width: '600px' }}
              >
                <p style={{ fontSize: '15px', marginBottom: '1px' }}>
                  Week - 1 - HTML - Week starting on Monday, September 12th
                  (9/12/2022) Module |
                </p>
                <p>Due Sep 25, 2022 at 11:59pm | 100pts</p>
              </div>
              <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li className="list-group-item">
              <i
                className="fa fa-grip-vertical"
                style={{ marginRight: '20px' }}
              ></i>
              <i className="fa fa-book"></i>
              <h6 style={{ display: 'inline' }}>
                <strong>
                  <Link
                    a="/Kanbas/Courses/Assignments/AssignmentEditor"
                    style={{ color: 'black' }}
                  >
                    A3 CSS
                  </Link>
                </strong>
              </h6>
              <div
                style={{ marginLeft: '70px', color: '#686464', width: '600px' }}
              >
                <p style={{ fontSize: '15px', marginBottom: '1px' }}>
                  Week - 2 - CSS - Week starting on Monday, September 19th
                  (9/19/2022) Module |
                </p>
                <p>Due Oct 2, 2022 at 11:59pm | 100pts</p>
              </div>
              <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li className="list-group-item">
              <i
                className="fa fa-grip-vertical"
                style={{ marginRight: '20px' }}
              ></i>
              <i className="fa fa-book"></i>
              <h6 style={{ display: 'inline' }}>
                <strong>
                  <Link
                    to="/Kanbas/Courses/Assignments/AssignmentEditor"
                    style={{ color: 'black' }}
                  >
                    A4 BOOTSTRAP
                  </Link>
                </strong>
              </h6>
              <div
                style={{ marginLeft: '70px', color: '#686464', width: '600px' }}
              >
                <p style={{ fontSize: '15px', marginBottom: '1px' }}>
                  Week - 3-BOOTSTRAP - Week starting on Monday, September 26th
                  (9/26/2022) Module |
                </p>
                <p>Due Oct 10, 2022 at 11:59pm | 100pts</p>
              </div>

              <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li className="list-group-item">
              <i
                className="fa fa-grip-vertical"
                style={{ marginRight: '20px' }}
              ></i>
              <i className="fa fa-book"></i>
              <h6 style={{ display: 'inline' }}>
                <strong>
                  <Link
                    to="/Kanbas/Courses/Assignments/AssignmentEditor"
                    style={{ color: 'black' }}
                  >
                    A5 JAVASCRIPT
                  </Link>
                </strong>
              </h6>
              <div
                style={{ marginLeft: '70px', color: '#686464', width: '600px' }}
              >
                <p style={{ fontSize: '15px', marginBottom: '1px' }}>
                  Week - 4 - JAVASCRIPT - Week starting on Monday, October 3rd
                  (10/2/2022) Module |
                </p>
                <p>Due Oct 16, 2022 at 11:59pm | 100pts</p>
              </div>
              <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li className="list-group-item">
              <i
                className="fa fa-grip-vertical"
                style={{ marginRight: '20px' }}
              ></i>
              <i className="fa fa-book"></i>
              <h6 style={{ display: 'inline' }}>
                <strong>
                  <Link
                    to="/Kanbas/Courses/Assignments/AssignmentEditor"
                    style={{ color: 'black' }}
                  >
                    A6 REACT
                  </Link>
                </strong>
              </h6>
              <div
                style={{ marginLeft: '70px', color: '#686464', width: '600px' }}
              >
                <p style={{ fontSize: '15px', marginBottom: '1px' }}>
                  Week - 5 - React and Routing - Week starting on Monday,
                  October 10th (10/10/2022) Module |
                </p>
                <p>Due Oct 23, 2022 at 11:59pm | 100pts</p>
              </div>
              <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
        </ul>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default CourseAssignmentContent;
