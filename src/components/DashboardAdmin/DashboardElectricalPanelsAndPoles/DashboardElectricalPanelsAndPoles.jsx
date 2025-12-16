import { useState } from "react";
import styles from "./DashboardElectricalPanelsAndPoles.module.css";

const DashboardElectricalPanelsAndPoles = () => {
  const [panels, setPanels] = useState([]);

  const [formData, setFormData] = useState({
    panelNumber: "",
    address: "",
    polesCount: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPanels([
      ...panels,
      { ...formData, id: Date.now() },
    ]);

    setFormData({
      panelNumber: "",
      address: "",
      polesCount: "",
      notes: "",
    });
  };


     const [activeTab, setActiveTab] = useState("kilo");
  
    const pageTitles = {
      home: "الرئيسية",
      readings: "القراءات",
      wallet: "المحفظة",
      kilo: "الطبلونات والاعمدة",
    };

    
  return (
    <div className={styles.page} dir="rtl">

             <div className={styles.breadcrumb}>
                لوحة التحكم / {pageTitles[activeTab]}
              </div>

      {/* ➕ إضافة طابلون */}
      <form className={styles.card} onSubmit={handleSubmit}>
        <h3 className={styles.cardTitle}>إضافة طابلون جديد</h3>

        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label>رقم الطابلون</label>
            <input
              type="text"
              name="panelNumber"
              value={formData.panelNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>العنوان / المنطقة</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>عدد الأعمدة</label>
            <input
              type="number"
              name="polesCount"
              value={formData.polesCount}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>ملاحظات</label>
            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className={styles.submitBtn}>حفظ الطابلون</button>
      </form>

      {/* 📋 جدول الطابلونات */}
      <div className={styles.tableCard}>
        <h3 className={styles.cardTitle}>قائمة الطابلونات</h3>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>رقم الطابلون</th>
              <th>العنوان</th>
              <th>عدد الأعمدة</th>
              <th>ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {panels.length === 0 ? (
              <tr>
                <td colSpan="4" className={styles.empty}>
                  لا توجد بيانات بعد
                </td>
              </tr>
            ) : (
              panels.map((panel) => (
                <tr key={panel.id}>
                  <td>{panel.panelNumber}</td>
                  <td>{panel.address}</td>
                  <td>{panel.polesCount}</td>
                  <td>{panel.notes || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardElectricalPanelsAndPoles;
