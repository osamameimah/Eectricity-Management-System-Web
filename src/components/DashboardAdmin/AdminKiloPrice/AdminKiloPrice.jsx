 import styles from "./AdminKiloPrice.module.css";
import React, { useState, useEffect } from "react";
import { Pencil, CheckCircle, History, AlertTriangle } from "lucide-react";

const KiloPrice = () => {
  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    kilo: "سعر الكيلو",
  };

  const [activeTab] = useState("kilo");
  const [currentPrice, setCurrentPrice] = useState(3.5);
  const [newPrice, setNewPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [priceHistory, setPriceHistory] = useState([]);
  const [error, setError] = useState("");

  // ========= جلب البيانات من قاعدة البيانات =========
  useEffect(() => {
    fetch("/api/kilo-price")
      .then((res) => res.json())
      .then((data) => {
        setCurrentPrice(data.currentPrice);
        setPriceHistory(data.history);
      });
  }, []);

  // ========= إرسال التحديث لقاعدة البيانات =========
  const saveNewPrice = () => {
    if (Number(newPrice) <= 0) {
      setError("يرجى إدخال سعر صحيح أكبر من صفر");
      return;
    }

    const updatedRecord = {
      newPrice,
      oldPrice: currentPrice,
      date: new Date().toLocaleString(),
    };

    fetch("/api/update-kilo-price", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecord),
    }).then(() => {
      setCurrentPrice(newPrice);
      setPriceHistory([updatedRecord, ...priceHistory]);
      setShowModal(false);
      setNewPrice("");
      setError("");
    });
  };

  return (
    <>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>

      <div className={styles.kiloWrapper}>

        {/* --- الكرت الرئيسي --- */}
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
            <p style={{ color: "red", marginBottom: "10px", fontWeight: "bold" }}>
              <AlertTriangle size={16} /> {error}
            </p>
          )}

          <button
            className={styles.updateBtn}
            onClick={() => setShowModal(true)}
            disabled={!newPrice}
          >
            <Pencil size={18} />
            تحديث السعر
          </button>

          <p className={styles.note}>
            • تعديل سعر الكيلو في أي وقت  
            • تطبيق السعر الجديد على الفواتير القادمة فقط  
          </p>
        </div>

        {/* --- سجل تغييرات الأسعار --- */}
        <div className={styles.historyCard}>
          <div className={styles.historyHeader}>
            <History size={20} />
            <h3>سجل تغييرات أسعار الكيلو</h3>
          </div>

          <table className={styles.historyTable}>
            <thead>
              <tr>
                <th>السعر القديم</th>
                <th>السعر الجديد</th>
                <th>التاريخ</th>
              </tr>
            </thead>

            <tbody>
              {priceHistory.length === 0 ? (
                <tr>
                  <td colSpan={3}>لا يوجد تغييرات بعد</td>
                </tr>
              ) : (
                priceHistory
                  .slice(0, 5) // عرض أحدث 5 تغييرات فقط
                  .map((item, i) => (
                    <tr key={i}>
                      <td>{item.oldPrice}</td>
                      <td>{item.newPrice}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* --- مودال تأكيد تعديل السعر --- */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h2 className={styles.modalTitle}>
              <CheckCircle size={28} color="#905f00" />
              تأكيد تعديل السعر
            </h2>

            <p className={styles.modalText}>
              هل أنت متأكد من رغبتك بتحديث سعر الكيلو من{" "}
              <strong>{currentPrice}</strong> إلى{" "}
              <strong>{newPrice}</strong> شيكل؟
            </p>

            <div className={styles.modalActions}>
              <button
                className={styles.modalConfirm}
                onClick={saveNewPrice}
              >
                نعم، تأكيد
              </button>

              <button
                className={styles.modalCancel}
                onClick={() => setShowModal(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KiloPrice;
