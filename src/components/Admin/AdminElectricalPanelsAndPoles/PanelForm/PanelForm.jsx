import React from "react";
import styles from "./PanelForm.module.css";

const PanelForm = ({ onAddClick }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>إضافة طابلون جديد</h3>
      <p className={styles.description}>
        انقر على الزر أدناه لإضافة طابلون جديد إلى النظام
      </p>
      <button className={styles.addBtn} onClick={onAddClick}>
        + إضافة طابلون
      </button>
    </div>
  );
};

export default PanelForm;
