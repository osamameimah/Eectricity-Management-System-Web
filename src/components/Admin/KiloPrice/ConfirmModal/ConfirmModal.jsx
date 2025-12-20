import React from "react";
import styles from "./ConfirmModal.module.css";
import { CheckCircle } from "lucide-react";

const ConfirmModal = ({ show, setShow, currentPrice, newPrice, saveNewPrice }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>
          <CheckCircle size={28} color="#905f00" />
          تأكيد تعديل السعر
        </h2>

        <p className={styles.modalText}>
          هل أنت متأكد من رغبتك بتحديث سعر الكيلو من{" "}
          <strong>{currentPrice}</strong> إلى <strong>{newPrice}</strong> شيكل؟
        </p>

        <div className={styles.modalActions}>
          <button className={styles.modalConfirm} onClick={saveNewPrice}>
            نعم، تأكيد
          </button>
          <button className={styles.modalCancel} onClick={() => setShow(false)}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
