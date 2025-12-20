import React from "react";
import styles from "./StaffPagination.module.css";

const StaffPagination = ({ page, totalPages, filteredCount, onPageChange }) => {
  const renderPageNumbers = () => {
    const range = [];
    const delta = 2;
    const left = Math.max(1, page - delta);
    const right = Math.min(totalPages, page + delta);

    if (left > 1) {
      range.push(1);
      if (left > 2) range.push("...");
    }

    for (let i = left; i <= right; i++) range.push(i);

    if (right < totalPages) {
      if (right < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range.map((p, idx) =>
      p === "..." ? (
        <span key={"dots-" + idx} className={styles.pageDots}>
          ...
        </span>
      ) : (
        <button
          key={p}
          className={`${styles.pageBtn} ${p === page ? styles.pageActive : ""}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      )
    );
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagingInfo}>
        <span>
          إجمالي الموظفين: <strong>{filteredCount}</strong>
        </span>
        <span>
          الصفحة {page} من {totalPages}
        </span>
      </div>

      <div className={styles.pagingControls}>
        <button 
          className={styles.pageBtn} 
          onClick={() => onPageChange(1)} 
          disabled={page === 1}
        >
          « الأولى
        </button>
        <button 
          className={styles.pageBtn} 
          onClick={() => onPageChange(page - 1)} 
          disabled={page === 1}
        >
          ‹ السابق
        </button>

        {renderPageNumbers()}

        <button 
          className={styles.pageBtn} 
          onClick={() => onPageChange(page + 1)} 
          disabled={page === totalPages}
        >
          التالي ›
        </button>
        <button 
          className={styles.pageBtn} 
          onClick={() => onPageChange(totalPages)} 
          disabled={page === totalPages}
        >
          الأخيرة »
        </button>
      </div>
    </div>
  );
};

export default StaffPagination;