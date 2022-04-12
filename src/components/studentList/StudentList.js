import React from "react";
import styles from "./StudentList.module.scss";
import Student from "./student/Student";

export default function StudentList({ filteredStudents, setFilteredStudents }) {
  return (
    <div className={styles.student_list_container}>
      <div className={styles.student_list}>
        {filteredStudents &&
          filteredStudents.map((student) => (
            <Student
              student={student}
              key={student.id}
              setFilteredStudents={setFilteredStudents}
            />
          ))}
      </div>
    </div>
  );
}
