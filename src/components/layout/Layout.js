import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Layout.module.scss";

import NameSearch from "../nameSearch/NameSearch";
import StudentList from "../studentList/StudentList";
import TagSearch from "../tagSeach/TagSearch";

export default function Layout() {
  const url = "https://api.hatchways.io/assessment/students";
  const { data } = useFetch(url);
  const students = data?.students;
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [search, setSearch] = useState({
    nameSearch: "",
    tagSearch: "",
  });

  const handleSearch = (e) => {
    setSearch((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const tagFilter = (array) => {
    if (search.tagSearch.length > 0) {
      const results = array?.filter((student) => {
        if (student.hasOwnProperty("tags")) {
          const tagFilter = student.tags.filter((tag) => {
            if (tag.includes(search.tagSearch)) {
              return tag;
            }
          });
          if (tagFilter.length > 0) {
            return student;
          }
        }
      });
      return results;
    } else {
      return array;
    }
  };

  const nameFilter = (array) => {
    if (search.nameSearch.length > 0) {
      return array?.filter(
        (student) =>
          student.lastName
            .toLowerCase()
            .includes(search.nameSearch.toString().toLowerCase()) ||
          student.firstName
            .toLowerCase()
            .includes(search.nameSearch.toString().toLowerCase())
      );
    } else {
      return array;
    }
  };

  useEffect(() => {
    let result = students;
    result = nameFilter(result);
    result = tagFilter(result);
    setFilteredStudents(result);
  }, [students, search.tagSearch, search.nameSearch]);

  return (
    <div className={styles.main_container}>
      <div className={styles.search_container}>
        <NameSearch
          handleSearch={handleSearch}
          placeholder="Search by name"
          search={search}
        />
        <TagSearch
          placeholder="Search by tag"
          handleSearch={handleSearch}
          search={search}
        />
      </div>
      <div className={styles.student_container}>
        <StudentList
          filteredStudents={filteredStudents}
          setFilteredStudents={setFilteredStudents}
        />
      </div>
    </div>
  );
}
