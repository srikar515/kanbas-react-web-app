import styles from '../../../index.css';
import CourseAssignmentContent from './CourseAssignmentContent';

const CoursesAssignments = () => {
  return (
    <div className="flex-grow-1">
      <div className={styles.wd_flex_row_container}>
        <div className="d-flex">
          <CourseAssignmentContent />
        </div>
      </div>
    </div>
  );
};

export default CoursesAssignments;
