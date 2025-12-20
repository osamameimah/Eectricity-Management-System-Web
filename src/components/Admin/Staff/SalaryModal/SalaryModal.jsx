import React from "react";
import styles from "./SalaryModal.module.css";

const SalaryModal = ({ item, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3 className={styles.modalTitle}>الرواتب الشهرية للموظف: {item.name}</h3>
        <ul className={styles.salaryList}>
          {item.monthlySalaries.length === 0 ? (
            <li>لا توجد رواتب محفوظة</li>
          ) : (
            item.monthlySalaries.map((sal, idx) => (
              <li key={idx}>
                الشهر {idx + 1}: <span className={styles.salaryAmount}>{sal} ₪</span>
              </li>
            ))
          )}
        </ul>
        <div className={styles.modalActions}>
          <button className={styles.closeBtn} onClick={onClose}>
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryModal;