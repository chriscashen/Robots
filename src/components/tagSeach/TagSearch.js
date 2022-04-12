import React from "react";
import styles from "./TagSearch.module.scss";

export default function TagSearch({ handleSearch, placeholder, search }) {
  return (
    <div className={styles.search}>
      <div className={styles.search_inputs}>
        <input
          type="text"
          name="tagSearch"
          value={search.tagSearch}
          onChange={(e) => handleSearch(e)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
