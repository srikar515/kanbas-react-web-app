const CourseStatusSection = () => {
  return (
    <div
      class="status-content d-none d-lg-block"
      style={{ marginLeft: '20px', marginRight: '20px' }}
    >
      <h5>Course Status</h5>

      <button class="btn" style={{ background: '#eeeeee' }}>
        <i class="fa-solid fa-ban" style={{ marginRight: '3px' }}></i>Unpublish
      </button>
      <button class="btn" style={{ background: '#82be5d' }}>
        <i
          class="fa-regular fa-circle-check"
          style={{
            background: 'white',
            borderRadius: '50%',
            marginRight: '3px',
          }}
        ></i>
        Published
      </button>
      <ul class="list-group status-list" style={{ marginTop: '10px' }}>
        <li class="list-group-item">
          <i class="fa-solid fa-file-import"></i>Import Existing Content
        </li>
        <li class="list-group-item">
          <i class="fa-solid fa-cloud-arrow-up"></i>Import from Commons
        </li>
        <li class="list-group-item">
          <i class="fa-solid fa-crosshairs"></i>Choose Home Page
        </li>
        <li class="list-group-item">
          <i class="fa fa-square-poll-vertical"></i>View Course Stream
        </li>
        <li class="list-group-item">
          <i class="fa fa-bullhorn"></i>New Announcement
        </li>
        <li class="list-group-item">
          <i class="fa fa-square-poll-vertical"></i>New Analytics
        </li>
        <li class="list-group-item">
          <i class="fa-regular fa-bell"></i>View Course Notifications
        </li>
      </ul>
      <br />
      <h5>To Do</h5>
      <hr />
      <div class="d-flex">
        <i
          class="fa-solid fa-circle-minus fa-2x"
          style={{
            transform: 'rotate(90deg)',
            color: '#b52828',
            marginRight: '15px',
            marginBottom: '30px',
          }}
        ></i>
        <div class="text">
          <h6 style={{ color: '#b52828', marginLeft: '10px' }}>
            Grade A1 - ENV + HTML
          </h6>
          <p style={{ marginLeft: '10px', marginTop: '-10px', color: 'grey' }}>
            100 points Sep 18 at 11:59
          </p>
        </div>
        <i class="fa fa-xmark" style={{ marginLeft: '100px' }}></i>
      </div>
      <br />
      <div>
        <h5>
          Coming Up
          <div class="float-end">
            <i class="fa fa-calendar"></i>
            <a href="#" style={{ color: '#b52828', fontSize: '15px' }}>
              View Calendar
            </a>
          </div>
        </h5>
      </div>

      <hr />

      <ul style={{ listStyle: 'none' }}>
        <li>
          <i class="fa fa-calendar"></i>
          <a href="#" style={{ color: '#b52828' }}>
            Lecture
          </a>
          <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
            CS 4550.12631.202410
          </p>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '15px',
              color: 'grey',
              marginTop: '-18px',
            }}
          >
            Sep 19 at 11:45AM
          </p>
        </li>
        <li>
          <i class="fa fa-calendar"></i>
          <a href="#" style={{ color: '#b52828' }}>
            CS 5610 06 SP23 Lecture
          </a>
          <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
            CS 5610.12631.202410
          </p>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '15px',
              color: 'grey',
              marginTop: '-18px',
            }}
          >
            Sep 21 at 11:45AM
          </p>
        </li>
        <li>
          <i class="fa fa-calendar"></i>
          <a href="#" style={{ color: '#b52828' }}>
            CS 5610 Web Development Lecture
          </a>
          <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
            CS 5610.12631.202410
          </p>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '15px',
              color: 'grey',
              marginTop: '-18px',
            }}
          >
            Sep 21 at 11:45AM
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CourseStatusSection;
