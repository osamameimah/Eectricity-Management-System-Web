 import React, { useState } from "react";
import styles from "./AdminReadings.module.css";

const AdminReadings = () => {
  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    kilo: "القراءات والفواتير الشهرية",
  };

  const [activeTab, setActiveTab] = useState("kilo");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [newReading, setNewReading] = useState({
    subscriber: "",
    month: "",
    reading: "",
    previousReading: "",
    notes: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  // بيانات تجريبية للمشتركين
  const [readings, setReadings] = useState([
    { subscriber: "محمد علي", month: "2025-12", reading: 120, previousReading: 110, notes: "" },
    { subscriber: "أحمد خالد", month: "2025-12", reading: 85, previousReading: 80, notes: "" },
    { subscriber: "سعيد محمود", month: "2025-11", reading: 95, previousReading: 90, notes: "تأخر بالقراءة" },
  ]);

  const addReading = () => {
    setReadings([...readings, newReading]);
    setNewReading({ subscriber: "", month: "", reading: "", previousReading: "", notes: "" });
    setShowAddModal(false);
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setNewReading(readings[index]);
    setShowEditModal(true);
  };

  const saveEditReading = () => {
    const updatedReadings = [...readings];
    updatedReadings[editingIndex] = newReading;
    setReadings(updatedReadings);
    setEditingIndex(null);
    setShowEditModal(false);
    setNewReading({ subscriber: "", month: "", reading: "", previousReading: "", notes: "" });
  };

  const deleteReading = (index) => {
    if (window.confirm("هل أنت متأكد من حذف هذه القراءة؟")) {
      const updatedReadings = readings.filter((_, i) => i !== index);
      setReadings(updatedReadings);
    }
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setNewReading({ subscriber: "", month: "", reading: "", previousReading: "", notes: "" });
  };

  // تصفية البيانات حسب البحث والفلاتر
  const filteredReadings = readings.filter(
    (r) =>
      r.subscriber.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterMonth === "" || r.month === filterMonth)
  );

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        {/* <h1 className={styles.pageTitle}>القراءات الشهرية</h1> */}
        <button
          className={styles.actionBtn}
          style={{ background: "linear-gradient(135deg, #905f00, #c8962c)" }}
          onClick={() => setShowAddModal(true)}
        >
          إضافة قراءة جديدة
        </button>
      </div>

      {/* شريط البحث والفلاتر */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="بحث بالاسم..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "1px solid #d1d5db" }}
        />
        <input
          type="month"
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
          style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #d1d5db" }}
        />
        <button
          className={styles.actionBtn}
          style={{ background: "#4b79a1" }}
          onClick={() => { setSearchQuery(""); setFilterMonth(""); }}
        >
          إعادة تعيين الفلاتر
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>اسم المشترك</th>
            <th>الشهر</th>
            <th>القراءة الحالية</th>
            <th>القراءة السابقة</th>
            <th>ملاحظات</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredReadings.length > 0 ? (
            filteredReadings.map((r, idx) => (
              <tr key={idx}>
                <td>{r.subscriber}</td>
                <td>{r.month}</td>
                <td className={styles.consumption}>{r.reading}</td>
                <td>{r.previousReading}</td>
                <td>{r.notes || "-"}</td>
                <td>
                  <button className={styles.detailsBtn} onClick={() => openEditModal(idx)}>
                    تعديل
                  </button>
                  <button
                    className={styles.detailsBtn}
                    style={{ backgroundColor: "#e11d48", marginLeft: "5px" }}
                    onClick={() => deleteReading(idx)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>
                لا توجد بيانات للعرض
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* مودال إضافة قراءة */}
      {showAddModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3 style={{ color: "#905f00", textAlign: "center", marginBottom: "1rem" }}>
              إضافة قراءة جديدة
            </h3>
            <div className={styles.formCard}>
              <label>اسم المشترك</label>
              <input
                type="text"
                value={newReading.subscriber}
                onChange={(e) => setNewReading({ ...newReading, subscriber: e.target.value })}
              />

              <label>الشهر</label>
              <input
                type="month"
                value={newReading.month}
                onChange={(e) => setNewReading({ ...newReading, month: e.target.value })}
              />

              <label>القراءة الحالية</label>
              <input
                type="number"
                value={newReading.reading}
                onChange={(e) => setNewReading({ ...newReading, reading: e.target.value })}
              />

              <label>القراءة السابقة</label>
              <input
                type="number"
                value={newReading.previousReading}
                onChange={(e) => setNewReading({ ...newReading, previousReading: e.target.value })}
              />

              <label>ملاحظات</label>
              <textarea
                value={newReading.notes}
                onChange={(e) => setNewReading({ ...newReading, notes: e.target.value })}
              />

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button
                  className={styles.actionBtn}
                  style={{ background: "linear-gradient(135deg, #905f00, #c8962c)" }}
                  onClick={addReading}
                >
                  إضافة
                </button>
                <button className={styles.closeBtn} onClick={closeModal}>
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* مودال تعديل قراءة */}
      {showEditModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3 style={{ color: "#905f00", textAlign: "center", marginBottom: "1rem" }}>
              تعديل القراءة
            </h3>
            <div className={styles.formCard}>
              <label>اسم المشترك</label>
              <input
                type="text"
                value={newReading.subscriber}
                onChange={(e) => setNewReading({ ...newReading, subscriber: e.target.value })}
              />

              <label>الشهر</label>
              <input
                type="month"
                value={newReading.month}
                onChange={(e) => setNewReading({ ...newReading, month: e.target.value })}
              />

              <label>القراءة الحالية</label>
              <input
                type="number"
                value={newReading.reading}
                onChange={(e) => setNewReading({ ...newReading, reading: e.target.value })}
              />

              <label>القراءة السابقة</label>
              <input
                type="number"
                value={newReading.previousReading}
                onChange={(e) => setNewReading({ ...newReading, previousReading: e.target.value })}
              />

              <label>ملاحظات</label>
              <textarea
                value={newReading.notes}
                onChange={(e) => setNewReading({ ...newReading, notes: e.target.value })}
              />

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button
                  className={styles.actionBtn}
                  style={{ background: "linear-gradient(135deg, #4b79a1, #283e51)" }}
                  onClick={saveEditReading}
                >
                  حفظ التعديلات
                </button>
                <button className={styles.closeBtn} onClick={closeModal}>
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReadings;
