 import React, { useState } from "react";
import styles from "./AdminInvoices.module.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Invoices = () => {
  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    kilo: "الفواتير الشهرية",
  };

  const [activeTab] = useState("kilo");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [invoices] = useState([
    { subscriber: "محمد علي", totalInvoice: 20, status: "غير مدفوعة" },
    { subscriber: "أحمد خالد", totalInvoice: 10, status: "مدفوعة" },
    { subscriber: "سعيد محمود", totalInvoice: 10, status: "غير مدفوعة" },
  ]);

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch = inv.subscriber
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? inv.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const totalInvoices = filteredInvoices.length;
  const paidInvoices = filteredInvoices.filter((i) => i.status === "مدفوعة");
  const unpaidInvoices = filteredInvoices.filter((i) => i.status === "غير مدفوعة");
  const totalAmount = filteredInvoices.reduce((sum, i) => sum + i.totalInvoice, 0);

  const generatePDF = () => {
    const doc = new jsPDF();

    // العنوان
    doc.setFontSize(18);
    doc.text("تقرير الفواتير الشهرية", 14, 20);

    // التاريخ
    const date = new Date();
    doc.setFontSize(12);
    doc.text(`تاريخ التقرير: ${date.toLocaleDateString()}`, 14, 28);

    // الجدول
    const tableColumn = ["اسم المشترك", "إجمالي الفاتورة", "الحالة"];
    const tableRows = filteredInvoices.map((inv) => [
      inv.subscriber,
      inv.totalInvoice,
      inv.status,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 36,
      theme: "striped",
      headStyles: { fillColor: [144, 95, 0] },
    });

    // الإجمالي في أسفل الجدول
    doc.text(`إجمالي الفواتير: ${totalAmount}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save("Invoices_Report.pdf");
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>

      {/* <h1 className={styles.pageTitle}>الفواتير الشهرية</h1> */}

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="بحث باسم المشترك..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #d1d5db", flex: 1 }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #d1d5db" }}
        >
          <option value="">كل الحالات</option>
          <option value="مدفوعة">مدفوعة</option>
          <option value="غير مدفوعة">غير مدفوعة</option>
        </select>
        <button
          onClick={generatePDF}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#905f00",
            color: "white",
            cursor: "pointer",
          }}
        >
          توليد تقرير PDF
        </button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <strong>عدد الفواتير:</strong> {totalInvoices} |{" "}
        <strong>الفواتير المدفوعة:</strong> {paidInvoices.length} |{" "}
        <strong>الفواتير غير المدفوعة:</strong> {unpaidInvoices.length} |{" "}
        <strong>الإجمالي:</strong> {totalAmount}
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>اسم المشترك</th>
            <th>إجمالي الفاتورة</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((inv, idx) => (
              <tr key={idx}>
                <td>{inv.subscriber}</td>
                <td>{inv.totalInvoice}</td>
                <td style={{ color: inv.status === "مدفوعة" ? "green" : "red" }}>
                  {inv.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", padding: "10px" }}>
                لا توجد فواتير للعرض
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
