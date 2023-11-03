import styles from './index.module.css';
import db from '../Database';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePen } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="d-flex flex-row">
      <div className={styles.main_content}>
        <h1>Dashboard</h1>
        <hr />

        <div className="container" style={{ marginLeft: '30px' }}>
          <h2>Published Courses ({`${courses.length}`})</h2>
          <hr />

          <div
            className={`d-flex flex-row flex-wrap justify-content-around ${styles.cardContainer}`}
          >
            {courses.map((course) => (
              <Card style={{ width: '270px' }} key={course._id}>
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
                  <Button style={{ background: 'white', border: 'white' }}>
                    <FaFilePen
                      style={{ color: 'grey', fontSize: '20px' }}
                    ></FaFilePen>
                  </Button>
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