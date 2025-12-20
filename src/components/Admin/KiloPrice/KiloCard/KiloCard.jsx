import React from "react";
import styles from "./KiloCard.module.css";
import { Pencil, AlertTriangle } from "lucide-react";

const KiloCard = ({ currentPrice, newPrice, setNewPrice, setShowModal, error }) => {
  return (
    <div className={styles.kiloCard}>
      <h2>سعر الكيلو الحالي</h2>
      <p className={styles.kiloValue}>{currentPrice} شيكل</p>

      <div className={styles.inputRow}>
        <label>تعديل سعر الكيلو</label>
        <input
          type="number"
          placeholder="أدخل السعر الجديد"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </div>

      {error && (
        <p className={styles.errorMsg}>
          <AlertTriangle size={16} /> {error}
        </p>
      )}

      <button
        className={styles.updateBtn}
        onClick={() => setShowModal(true)}
        disabled={!newPrice}
      >
        <Pencil size={18} /> تحديث السعر
      </button>

      <p className={styles.note}>
        • تعديل سعر الكيلو في أي وقت  
        • تطبيق السعر الجديد على الفواتير القادمة فقط  
      </p>
    </div>
  );
};

export default KiloCard;
