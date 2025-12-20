import React from "react";
import styles from "./AddEditModal.module.css";

const AddEditModal = ({ title, form, onFormChange, onSave, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <div className={styles.formGrid}>
          <label>اسم الموظف</label>
          <input 
            value={form.name} 
            onChange={(e) => onFormChange({ ...form, name: e.target.value })} 
          />
          <label>رقم الجوال</label>
          <input 
            value={form.phone} 
            onChange={(e) => onFormChange({ ...form, phone: e.target.value })} 
          />
          <label>الهوية</label>
          <input 
            value={form.nationalId} 
            onChange={(e) => onFormChange({ ...form, nationalId: e.target.value })} 
          />
          <label>العنوان</label>
          <input 
            value={form.address} 
            onChange={(e) => onFormChange({ ...form, address: e.target.value })} 
          />
          <label>الاختصاص</label>
          <input 
            value={form.specialty} 
            onChange={(e) => onFormChange({ ...form, specialty: e.target.value })} 
          />
          <label>عدد الأعطال التي أنجزها</label>
          <input
            type="number"
            value={form.ticketsDone}
            onChange={(e) => onFormChange({ ...form, ticketsDone: Number(e.target.value) })}
          />
          <label>تاريخ التوظيف</label>
          <input 
            type="date" 
            value={form.hireDate} 
            onChange={(e) => onFormChange({ ...form, hireDate: e.target.value })} 
          />
        </div>
        <div className={styles.modalActions}>
          <button className={styles.actionBtn} onClick={onSave}>
            حفظ
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;