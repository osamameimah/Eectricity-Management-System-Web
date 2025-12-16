 import styles from "./AdminIssuesReports.module.css";
import React, { useState } from "react";

const AdminIssuesReports = () => {
  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    issues: "تقارير الأعطال",
  };

  const [activeTab] = useState("issues");

  // بيانات الأعطال المخزنة
  const [issues, setIssues] = useState([
    {
      subscriber: "أسامة ميمة",
      address: "غزة - النصر",
      pumper: "15",
      details: "انقطاع التيار الكهربائي جزئي",
      assignedTo: "محمد أبو سليم",
      status: "قيد التنفيذ",
      solvedBy: "",
      solvedDate: "",
    },
    {
      subscriber: "فاطمة الخالدي",
      address: "غزة - الشجاعية",
      pumper: "22",
      details: "عداد معطل",
      assignedTo: "أحمد سمير",
      status: "تم الحل",
      solvedBy: "أحمد سمير",
      solvedDate: "12/12/2025",
    },
  ]);

  // ===== مودال حل المشكلة =====
  const [showModal, setShowModal] = useState(false);
  const [currentIssueIndex, setCurrentIssueIndex] = useState(null);
  const [employeeName, setEmployeeName] = useState("");

  // فتح المودال عند الضغط على "تم الحل"
  const openSolveModal = (index) => {
    setCurrentIssueIndex(index);
    setEmployeeName(""); // تفريغ الحقل
    setShowModal(true);
  };

  // حفظ اسم الموظف وتاريخ الحل
  const handleSolve = () => {
    if (!employeeName.trim()) {
      alert("يرجى إدخال اسم الموظف الذي حل المشكلة!");
      return;
    }
    const updatedIssues = [...issues];
    const today = new Date().toLocaleDateString();
    updatedIssues[currentIssueIndex] = {
      ...updatedIssues[currentIssueIndex],
      status: "تم الحل",
      solvedBy: employeeName,
      solvedDate: today,
    };
    setIssues(updatedIssues);
    setShowModal(false);
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>

      {/* جدول الأعطال */}
      <div className={styles.issueWrapper} style={{ marginTop: "2rem" }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>المشترك</th>
              <th>العنوان</th>
              <th>رقم الطبالون</th>
              <th>تفاصيل العطل</th>
              <th>حالة العطل</th>
              <th>الموظف الذي حل المشكلة</th>
              <th>تاريخ الحل</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {issues.length === 0 ? (
              <tr>
                <td colSpan="8">لا توجد أعطال مسجلة بعد</td>
              </tr>
            ) : (
              issues.map((issue, index) => (
                <tr key={index}>
                  <td>{issue.subscriber}</td>
                  <td>{issue.address}</td>
                  <td>{issue.pumper}</td>
                  <td>{issue.details}</td>
                  <td
                    style={{
                      color: issue.status === "تم الحل" ? "green" : "#905f00",
                      fontWeight: "bold",
                    }}
                  >
                    {issue.status}
                  </td>
                  <td>{issue.solvedBy || "-"}</td>
                  <td>{issue.solvedDate || "-"}</td>
                  <td>
                    <button
                      className={styles.detailsBtn}
                      onClick={() => openSolveModal(index)}
                      disabled={issue.status === "تم الحل"}
                    >
                      {issue.status === "قيد التنفيذ" ? "تم الحل" : "تم الحل"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ===== مودال إدخال اسم الموظف ===== */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h2 className={styles.modalTitle}>تأكيد حل المشكلة</h2>
            <p>الرجاء إدخال اسم الموظف الذي حل المشكلة:</p>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="اسم الموظف"
              className={styles.noteInput}
            />
            <div className={styles.modalActions}>
              <button onClick={handleSolve} className={styles.modalConfirm}>
                تأكيد
              </button>
              <button
                onClick={() => setShowModal(false)}
                className={styles.modalCancel}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminIssuesReports;
