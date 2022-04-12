import React from "react";
import styles from "./NameSearch.module.scss";

export default function NameSearch({ handleSearch, placeholder, search }) {
  return (
    <div className={styles.search}>
      <div className={styles.search_inputs}>
        <input
          type="text"
          name="nameSearch"
          value={search.nameSearch}
          onChange={(e) => handleSearch(e)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
