import React from "react";
import styles from "./StaffControls.module.css";

const StaffControls = ({ search, pageSize, onSearchChange, onPageSizeChange }) => {
  return (
    <div className={styles.controls}>
      <input
        type="search"
        placeholder="ابحث بالاسم، الهاتف، أو الاختصاص..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.pageSizeWrap}>
        <label>عرض</label>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className={styles.sizeSelect}
        >
          {[5, 6, 8, 10, 15, 20].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <label>سطر / صفحة</label>
      </div>
    </div>
  );
};

export default StaffControls;