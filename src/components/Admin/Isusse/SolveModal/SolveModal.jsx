import React from "react";
import styles from "./SolveModal.module.css";

const SolveModal = ({ employeeName, setEmployeeName, onClose, onConfirm }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>تأكيد حل المشكلة</h2>
        <p>الرجاء إدخال اسم الموظف الذي حل المشكلة:</p>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="اسم الموظف"
          className={styles.noteInput}
        />
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.modalConfirm}>
            تأكيد
          </button>
          <button onClick={onClose} className={styles.modalCancel}>
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolveModal;
