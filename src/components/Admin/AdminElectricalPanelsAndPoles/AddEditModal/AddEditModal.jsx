import React from "react";
import styles from "./AddEditModal.module.css";

const AddEditModal = ({
  title,
  formData,
  onFormChange,
  onSave,
  onClose,
}) => {
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
            <label>رقم الطابلون *</label>
            <input
              type="text"
              value={formData.panelNumber}
              onChange={(e) =>
                onFormChange({ ...formData, panelNumber: e.target.value })
              }
              placeholder="مثال: P-001"
            />
          </div>

          <div className={styles.formGroup}>
            <label>العنوان / المنطقة *</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                onFormChange({ ...formData, address: e.target.value })
              }
              placeholder="مثال: نابلس - الحي الجديد"
            />
          </div>

          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label>ملاحظات</label>
            <textarea
              value={formData.notes}
              onChange={(e) =>
                onFormChange({ ...formData, notes: e.target.value })
              }
              placeholder="أضف أي ملاحظات هنا"
              rows="4"
            />
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