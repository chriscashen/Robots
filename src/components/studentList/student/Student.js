import React from "react";
import { useState, useRef } from "react";
import styles from "./Student.module.scss";
import Accordion from "./accordion/Accordion";
import StudentTagList from "./studentTagList/StudentTagList";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Student({ student, idx, setFilteredStudents }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  const tags = [];
  const tagInput = useRef(null);

  // Accordion Toggle Function
  const handleToggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  // Student Grade Average Function
  const getGradeAvg = (grades) => {
    const gradeTotal = grades.reduce((a, b) => +a + +b, 0);
    const gradeAvg = gradeTotal / grades.length || 0;

    return gradeAvg;
  };

  // Add New Tag Function
  const handleAddTag = (e) => {
    setNewTag(e.target.value);
    tagInput.current.focus();
  };

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      if (
        student.hasOwnProperty("tags") &&
        !student.tags.includes(newTag.trim())
      ) {
        student.tags.push(newTag.trim());
      } else if (
        student.hasOwnProperty("tags") &&
        student.tags.includes(newTag.trim())
      ) {
        setNewTag("");
        return;
      } else {
        student.tags = [newTag.trim()];
      }
      setFilteredStudents((prev) => {
        prev[idx] = student;
        return [...prev];
      });
      setNewTag("");
      tagInput.current.focus();
    }
  };
  // Delete Tag Function
  // const handleDelete = (tagToDelete) => () => {
  //   student.tags.filter((tag) => tag !== tagToDelete);
  // };

  return (
    <div className={styles.studentCard} key={student.id}>
      <div className={styles.studentCard_img_container}>
        <img className={styles.student_img} src={student.pic} />
      </div>
      <div className={styles.studentCard_information_container}>
        <div className={styles.studentCard_heading_container}>
          <h1
            className={styles.heading_primary}
          >{`${student.firstName} ${student.lastName}`}</h1>
          <button
            onClick={handleToggleAccordion}
            className={styles.accordion_btn}
          >
            {accordionOpen ? (
              <RemoveIcon sx={{ fontSize: "3em" }} />
            ) : (
              <AddIcon sx={{ fontSize: "3em" }} />
            )}
          </button>
        </div>
        <div className={styles.student_summary_container}>
          <p>{`Email: ${student.email}`}</p>
          <p>{`Company: ${student.company}`}</p>
          <p>{`Skill: ${student.skill}`}</p>
          <p>{`Average: ${getGradeAvg(student.grades)}%`}</p>
          {accordionOpen && (
            <Accordion
              student={student}
              accordionOpen={accordionOpen}
              key={student.id}
            />
          )}
          {student.hasOwnProperty(tags) ? null : (
            <StudentTagList
              tags={student.tags}
              student={student}
              // handleDelete={handleDelete}
            />
          )}
          <div className={styles.student_tag_input}>
            <input
              className={styles.tag_input}
              placeholder="Add a tag"
              type="text"
              value={newTag}
              onChange={handleAddTag}
              ref={tagInput}
              onKeyPress={handleAdd}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
