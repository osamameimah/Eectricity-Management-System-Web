 import React, { useRef, useEffect } from "react";
import styles from "./BillsModal.module.css";

const BillsModal = ({ selectedUser, show, close, handlePayBill }) => {
  const overlayRef = useRef();

  // إغلاق عند الضغط على الخلفية
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      close();
    }
  };

  // إغلاق عند الضغط على زر ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  if (!show) return null;

  return (
    <div
      className={styles.modalOverlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className={styles.modalBox}>
        <h3 style={{ color: "#905f00", textAlign: "center", marginBottom: 12 }}>
          فواتير المشترك: {selectedUser.name}
        </h3>
        <div className={styles.tableWrapper}>
          <table className={styles.modalTable}>
            <thead>
              <tr>
                <th>الحالية</th>
                <th>السابقة</th>
                <th>السحب</th>
                <th>مجموع الكيلو</th>
                <th>سعر الكيلو</th>
                <th>إجمالي الفاتورة</th>
                <th>الحالة</th>
                <th>تاريخ كتابة الفاتورة</th>
                <th>تاريخ الدفع</th>
                <th>الدفع</th>
              </tr>
            </thead>
            <tbody>
              {selectedUser.bills.map((bill, i) => (
                <tr key={i}>
                  <td>{bill.currentReading}</td>
                  <td>{bill.previousReading}</td>
                  <td>{bill.withdrawalValue}</td>
                  <td>{bill.kiloTotal}</td>
                  <td>{bill.kiloPrice}</td>
                  <td>{bill.totalInvoice}</td>
                  <td>{bill.status}</td>
                  <td>{bill.paidAt || "-"}</td>
                  <td>
                    <button
                      className={styles.payBtn}
                      disabled={bill.status === "مدفوعة"}
                      onClick={() => handlePayBill(i)}
                    >
                      {bill.status === "مدفوعة" ? "تم الدفع" : "دفع"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.closeBtn} onClick={close}>إغلاق</button>
        </div>
      </div>
    </div>
  );
};

export default BillsModal;
