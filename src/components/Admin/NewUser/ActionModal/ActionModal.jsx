import React from "react";
import styles from "./ActionModal.module.css";

const ActionModal = ({ show, modalUser, actionType, note, setNote, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>
          {actionType === "approve" ? "تأكيد الموافقة" : "تأكيد الرفض"}
        </h2>

        <p><strong>الاسم:</strong> {modalUser.name}</p>
        <p><strong>الهوية:</strong> {modalUser.id}</p>

        <label>ملاحظات:</label>
        <textarea
          className={styles.noteInput}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.modalConfirm}>تأكيد</button>
          <button onClick={onClose} className={styles.modalCancel}>إغلاق</button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
