import { FaBars } from 'react-icons/fa';
import styles from '../../../../index.css';

const CourseTopNavBar = () => {
  return (
    <div className="navigation-bar" style={{ marginTop: '20px' }}>
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
            <a href="#" style={{ color: '#b52828' }}>
              CS 5610.12631.202410
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
      <hr style={{ marginLeft: '20px', marginRight: '20px' }} />
    </div>
  );
};

export default CourseTopNavBar;
