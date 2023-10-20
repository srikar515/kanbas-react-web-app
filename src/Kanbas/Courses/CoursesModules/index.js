import CourseNavigation from '../CourseNavigation';
import styles from '../../../index.css';
import CourseTopNavBar from '../CoursesHome/CourseTopNavBar';
import CourseModuleContent from '../CoursesModules/CourseModuleContent';

const CoursesModules = () => {
  return (
    <div className="flex-grow-1">
      <div className={styles.wd_flex_row_container}>
        <div className="d-flex">
          <CourseModuleContent />
        </div>
      </div>
    </div>
  );
};

export default CoursesModules;
