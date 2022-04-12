import React from "react";
import styles from "./Accordion.module.scss";

export default function Accordion({ student, accordionOpen }) {
  return (
    <div className={styles.accordion}>
      {accordionOpen && (
        <div className={styles.accordion_body}>
          {student.grades.map((grade, i) => (
            <p key={i}>{`Test ${i + 1}: ${grade}%`}</p>
          ))}
        </div>
      )}
    </div>
  );
}
