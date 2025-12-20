import React from "react";
import styles from "./AddUserModal.module.css";

const AddUserModal = ({ show, newUser, setNewUser, onClose, onAdd }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>إضافة مشترك جديد</h2>

        <input placeholder="الاسم"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input placeholder="رقم الهوية"
          value={newUser.id}
          onChange={e => setNewUser({ ...newUser, id: e.target.value })}
        />
        <input placeholder="العنوان"
          value={newUser.address}
          onChange={e => setNewUser({ ...newUser, address: e.target.value })}
        />
        <input placeholder="رقم الجوال"
          value={newUser.phone}
          onChange={e => setNewUser({ ...newUser, phone: e.target.value })}
        />
        <input type="date"
          value={newUser.date}
          onChange={e => setNewUser({ ...newUser, date: e.target.value })}
        />
        <input placeholder="رقم الطبلون"
          value={newUser.panel}
          onChange={e => setNewUser({ ...newUser, panel: e.target.value })}
        />

        <div className={styles.modalActions}>
          <button onClick={onAdd} className={styles.modalConfirm}>إضافة</button>
          <button onClick={onClose} className={styles.modalCancel}>إغلاق</button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
