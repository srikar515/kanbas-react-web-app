import KanbasNavigation from '../../KanbasNavigation';
import CourseNavigation from '../CourseNavigation';
import styles from '../../../index.css';
import CourseTopNavBar from './CourseTopNavBar';
import CourseStatusSection from './CourseStatusSection';
import CourseHomeContent from './CourseHomeContent';

const CoursesHome = () => {
  return (
    <div className="d-flex flex-row">
      <div className="flex-grow-1">
        <div className={styles.wd_flex_row_container}>
          <div className="d-flex">
            <CourseHomeContent />
            <CourseStatusSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHome;
