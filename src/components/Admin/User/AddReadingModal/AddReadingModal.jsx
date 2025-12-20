import React from "react";
import styles from "./AddReadingModal.module.css";

const AddReadingModal = ({ selectedUser, show, close, readingForm, setReadingForm, handleSaveReading }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3 style={{ color: "#905f00", textAlign: "center" }}>إضافة قراءة لمشترك: {selectedUser.name}</h3>
        <div style={{ display: "grid", gap: 10 }}>
          <label>القراءة السابقة</label>
          <input type="number" value={readingForm.previousReading} onChange={(e) => setReadingForm({ ...readingForm, previousReading: e.target.value })} />
          <label>القراءة الحالية</label>
          <input type="number" value={readingForm.currentReading} onChange={(e) => setReadingForm({ ...readingForm, currentReading: e.target.value })} />
          <label>نوع التاريخ</label>
          <select value={readingForm.dateType} onChange={(e) => setReadingForm({ ...readingForm, dateType: e.target.value })}>
            <option value="أسبوعي">أسبوعي</option>
            <option value="شهري">شهري</option>
          </select>
          <label>تاريخ كتابة الفاتورة</label>
          <input type="date" value={readingForm.paymentDate} onChange={(e) => setReadingForm({ ...readingForm, paymentDate: e.target.value })} />
          <label>سعر الكيلو</label>
          <input type="number" value={readingForm.kiloPrice} onChange={(e) => setReadingForm({ ...readingForm, kiloPrice: e.target.value })} />
          <label>الحالة</label>
          <select value={readingForm.status} onChange={(e) => setReadingForm({ ...readingForm, status: e.target.value })}>
            <option value="غير مدفوعة">غير مدفوعة</option>
            <option value="مدفوعة">مدفوعة</option>
          </select>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.modalConfirm} onClick={handleSaveReading}>حفظ الفاتورة</button>
          <button className={styles.modalCancel} onClick={close}>إلغاء</button>
        </div>
      </div>
    </div>
  );
};

export default AddReadingModal;
