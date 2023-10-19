import KanbasNavigation from '../../KanbasNavigation';
import CourseNavigation from '../CourseNavigation';
import styles from '../../../index.css';
import CourseTopNavBar from '../CoursesHome/CourseTopNavBar';
import CourseModuleContent from '../CoursesModules/CourseModuleContent';

const CoursesModules = () => {
  return (
    <div className="d-flex flex-row">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <CourseTopNavBar />
        <div className={styles.wd_flex_row_container}>
          <div className="d-flex">
            <CourseNavigation />
            <CourseModuleContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesModules;
