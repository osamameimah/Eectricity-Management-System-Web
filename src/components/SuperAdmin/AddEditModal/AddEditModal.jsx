import React from "react";
import styles from "./AddEditModal.module.css";

const AddEditModal = ({ title, formData, onFormChange, onSave, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>الاسم الكامل *</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                onFormChange({ ...formData, fullName: e.target.value })
              }
              placeholder="أدخل الاسم الكامل"
            />
          </div>

          <div className={styles.formGroup}>
            <label>رقم الجوال *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                onFormChange({ ...formData, phone: e.target.value })
              }
              placeholder="059xxxxxxx"
            />
          </div>

          <div className={styles.formGroup}>
            <label>البريد الإلكتروني *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                onFormChange({ ...formData, email: e.target.value })
              }
              placeholder="example@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label>كلمة المرور *</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                onFormChange({ ...formData, password: e.target.value })
              }
              placeholder="********"
            />
          </div>

          <div className={styles.formGroup}>
            <label>الصلاحية *</label>
            <select
              value={formData.role}
              onChange={(e) =>
                onFormChange({ ...formData, role: e.target.value })
              }
            >
              <option value="admin">مدير</option>
              <option value="super_admin">مدير عام</option>
            </select>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button className={styles.saveBtn} onClick={onSave}>
            💾 حفظ
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;    