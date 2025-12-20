import React from "react";
import styles from "./EmployeeForm.module.css";

const EmployeeForm = ({ onAddClick }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>إضافة مدير جديد</h3>
      <p className={styles.description}>
        انقر على الزر أدناه لإضافة مدير جديد إلى النظام وتعيين صلاحياته
      </p>
      <button className={styles.addBtn} onClick={onAddClick}>
        + إضافة مدير
      </button>
    </div>
  );
};

export default EmployeeForm;