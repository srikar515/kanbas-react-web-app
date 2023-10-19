const CourseModuleContent = () => {
  return (
    <div
      class="flex-grow-1"
      style={{ marginLeft: '30px', marginBottom: '20px' }}
    >
      <div class="d-flex float-end main-content-control">
        <button class="btn" style={{ background: '#eeeeee' }}>
          Collapse All
        </button>
        <button class="btn" style={{ background: '#eeeeee' }}>
          View Progress
        </button>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ background: '#eeeeee' }}
          >
            <i class="fa-regular fa-circle-check"></i>Publish All
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Publish All
            </a>
            <a class="dropdown-item" href="#">
              Publish all items and modules
            </a>
            <a class="dropdown-item" href="#">
              UnPublish
            </a>
          </div>
        </div>

        <button class="btn btn-danger">
          <i class="fa fa-plus" style={{ marginRight: '3px' }}></i>Module
        </button>
        <button class="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <br />
      <hr />
      <ul class="list-group module-list">
        <li class="list-group-item list-group-item-secondary">
          <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
          <strong>Week 0 - Intro</strong>
          <div class="float-end">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </li>
        <ul class="list-group" style={{ borderRadius: '0' }}>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>LEARNING OBJECTIVES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Introduction to the Course
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Learn what is Web Development
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Creating a development environment
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Creating a web application
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Getting started with the first assignment
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>READING</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 1 - Introduction
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 2 - Creating User Interfaces with
              HTML
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>SLIDES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Introduction to Web Development
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Creating a HTTP Server with Node.js
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Creating a react application
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
        </ul>
        <li class="list-group-item list-group-item-secondary">
          <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
          <strong>Week 1 - HTML</strong>
          <div class="float-end">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </li>
        <ul class="list-group" style={{ borderRadius: '0' }}>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>LEARNING OBJECTIVES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Learn how to create user interfaces with HTML
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Keep working on Assignment 1
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Deploy the assignment to Netlify
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>READING</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 1 - Introduction
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 2 - Creating User Interfaces with
              HTML
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>SLIDES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Introduction to HTML and the DOM
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Formatting Web content with Headings and Paragraphs
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Formatting content with Lists and Tables
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Creating Web Forms
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Navigating with Anchors
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
        </ul>
      </ul>
    </div>
  );
};

export default CourseModuleContent;
