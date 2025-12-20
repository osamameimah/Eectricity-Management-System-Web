import React from "react";
import styles from "./EditUserModal.module.css";

const EditUserModal = ({ show, editData, setEditData, onClose, onSave }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>تعديل بيانات المشترك</h2>

        <input value={editData.name}
          onChange={e => setEditData({ ...editData, name: e.target.value })}
        />
        <input value={editData.address}
          onChange={e => setEditData({ ...editData, address: e.target.value })}
        />
        <input value={editData.phone}
          onChange={e => setEditData({ ...editData, phone: e.target.value })}
        />
        <input type="date" value={editData.date}
          onChange={e => setEditData({ ...editData, date: e.target.value })}
        />
        <input value={editData.panel}
          onChange={e => setEditData({ ...editData, panel: e.target.value })}
        />

        <textarea
          value={editData.notes}
          onChange={e => setEditData({ ...editData, notes: e.target.value })}
        />

        <div className={styles.modalActions}>
          <button onClick={onSave} className={styles.modalConfirm}>حفظ</button>
          <button onClick={onClose} className={styles.modalCancel}>إغلاق</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
