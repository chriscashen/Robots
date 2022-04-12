import React from "react";
import StudentList from "./components/studentList/StudentList";
import styles from "./app.module.scss";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
}

export default App;
