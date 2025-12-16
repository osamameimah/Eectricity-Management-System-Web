import React, { useState, useMemo, useEffect } from "react";
import styles from "./AdminAllUsers.module.css";

const DEFAULT_KILO_PRICE = 2;

const sampleUsers = [
  {
    number: "SUB001",
    name: "أسامة ميمة",
    id: "1234567890",
    address: "غزة - النصر",
    pumper: "15",
    phone: "0599603312",
    subscriptionDate: "2023-06-15",
    notes: "لا توجد ملاحظات",
    bills: [
      {
        currentReading: 120,
        previousReading: 110,
        withdrawalValue: 10,
        kiloTotal: 10,
        kiloPrice: 2,
        totalInvoice: 20,
        status: "غير مدفوعة",
        dateType: "شهري",
        paymentDate: "2025-12-01",
      },
    ],
  },
];

const AdminAllUsers = () => {
  const [users, setUsers] = useState(() => {
    const data = localStorage.getItem("ems_users_v2");
    return data ? JSON.parse(data) : sampleUsers;
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const [showBillsModal, setShowBillsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showAddReadingModal, setShowAddReadingModal] = useState(false);
  const [readingForm, setReadingForm] = useState({
    currentReading: "",
    previousReading: "",
    dateType: "أسبوعي",
    paymentDate: new Date().toISOString().slice(0, 10),
    kiloPrice: DEFAULT_KILO_PRICE,
    status: "غير مدفوعة",
  });

  const [toast, setToast] = useState({ show: false, msg: "", type: "" });

  // حفظ في localStorage
  useEffect(() => {
    localStorage.setItem("ems_users_v2", JSON.stringify(users));
  }, [users]);

  // فلترة المستخدمين
  const filteredUsers = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.number.toLowerCase().includes(q) ||
        u.pumper.toLowerCase().includes(q)
    );
  }, [users, searchTerm]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, page, pageSize]);

  // فتح المودالات
  const openBillsModal = (user) => {
    setSelectedUser(user);
    setShowBillsModal(true);
  };
  const closeBillsModal = () => {
    setSelectedUser(null);
    setShowBillsModal(false);
  };

  const openAddReadingModal = (user) => {
    setSelectedUser(user);
    const lastBill = user.bills && user.bills.length ? user.bills[0] : null;
    setReadingForm({
      currentReading: "",
      previousReading: lastBill ? lastBill.currentReading : 0,
      dateType: "أسبوعي",
      paymentDate: new Date().toISOString().slice(0, 10),
      kiloPrice: DEFAULT_KILO_PRICE,
      status: "غير مدفوعة",
    });
    setShowAddReadingModal(true);
  };
  const closeAddReadingModal = () => {
    setSelectedUser(null);
    setShowAddReadingModal(false);
  };

  // حفظ قراءة جديدة وحساب الفاتورة تلقائيًا
  const handleSaveReading = () => {
    const cur = Number(readingForm.currentReading);
    const prev = Number(readingForm.previousReading || 0);
    if (isNaN(cur) || cur < prev) {
      alert("الرجاء إدخال قراءة حالية صحيحة (أكبر من أو تساوي القراءة السابقة).");
      return;
    }
    const withdrawalValue = cur - prev;
    const kiloTotal = withdrawalValue;
    const kiloPrice = Number(readingForm.kiloPrice || DEFAULT_KILO_PRICE);
    const totalInvoice = kiloTotal * kiloPrice;

    const newBill = {
      currentReading: cur,
      previousReading: prev,
      withdrawalValue,
      kiloTotal,
      kiloPrice,
      totalInvoice,
      status: readingForm.status,
      dateType: readingForm.dateType,
      paymentDate: readingForm.paymentDate,
    };

    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.number === selectedUser.number
          ? { ...u, bills: [newBill, ...(u.bills || [])] }
          : u
      )
    );

    setShowAddReadingModal(false);
    setToast({ show: true, msg: "تم حفظ القراءة والفاتورة بنجاح", type: "success" });
    setTimeout(() => setToast({ show: false, msg: "", type: "" }), 2200);
  };

  // تحقق هل يوجد فواتير غير مدفوعة
  const hasUnpaid = (user) => (user.bills || []).some((b) => b.status === "غير مدفوعة");


  // دفع فاتورة
  const handlePayBill = (billIndex) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.number === selectedUser.number
          ? {
            ...u,
            bills: u.bills.map((b, i) =>
              i === billIndex
                ? { ...b, status: "مدفوعة" }
                : b
            ),
          }
          : u
      )
    );

    // تحديث المستخدم المختار مباشرة
    setSelectedUser((prev) => ({
      ...prev,
      bills: prev.bills.map((b, i) =>
        i === billIndex ? { ...b, status: "مدفوعة" } : b
      ),
    }));
  };

  // 


  return (
    <div className={styles.mainContent}>
      <div className={styles.breadcrumb}>لوحة التحكم / أسماء المشتركين</div>

      <div style={{ marginBottom: "1rem", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="ابحث باسم المشترك أو رقم المشترك أو الطبالون..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #ddd", flex: 1, minWidth: 220 }}
        />

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <label>عرض</label>
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            style={{ padding: "8px", borderRadius: 6 }}
          >
            {[5, 6, 8, 10, 15].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <label>سطر / صفحة</label>
        </div>
      </div>

      {/* جدول المشتركين */}
      <div className={styles.issueWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>رقم المشترك</th>
              <th>اسم المشترك</th>
              <th>الهوية</th>
              <th>العنوان</th>
              <th>رقم الطبالون</th>
              <th>رقم الجوال</th>
              <th>تاريخ الاشتراك</th>
              <th>الفواتير</th>
              <th>إضافة قراءة</th>
              <th>ملاحظات</th>

            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>لا توجد بيانات مطابقة</td>
              </tr>
            ) : (
              paginated.map((user, idx) => (
                <tr key={user.number || idx}>
                  <td>{user.number}</td>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.address}</td>
                  <td>{user.pumper}</td>
                  <td>{user.phone}</td>
                  <td>{user.subscriptionDate}</td>
                  <td>
                    <button
                      className={styles.detailsBtn}
                      style={{ backgroundColor: hasUnpaid(user) ? "#b91c1c" : "#065f46" }}
                      onClick={() => openBillsModal(user)}
                    >
                      عرض الفواتير ({(user.bills || []).length})
                    </button>
                  </td>
                  <td>
                    <button className={styles.detailsBtn} onClick={() => openAddReadingModal(user)}>
                      إضافة قراءة
                    </button>
                  </td>
                  <td>{user.notes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.pagingInfo}>
          <span>إجمالي المشتركين: <strong>{filteredUsers.length}</strong></span>
          <span>الصفحة {page} من {totalPages}</span>
        </div>
        <div className={styles.pagingControls}>
          <button className={styles.pageBtn} onClick={() => setPage(1)} disabled={page === 1}>« الأولى</button>
          <button className={styles.pageBtn} onClick={() => setPage(page - 1)} disabled={page === 1}>‹ السابق</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`${styles.pageBtn} ${page === i + 1 ? styles.pageActive : ""}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button className={styles.pageBtn} onClick={() => setPage(page + 1)} disabled={page === totalPages}>التالي ›</button>
          <button className={styles.pageBtn} onClick={() => setPage(totalPages)} disabled={page === totalPages}>الأخيرة »</button>
        </div>
      </div>

      {/* مودال عرض الفواتير */}
      {showBillsModal && selectedUser && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3 style={{ color: "#905f00", textAlign: "center" }}>فواتير المشترك: {selectedUser.name}</h3>
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
                  <th>نوع التاريخ</th>
                  <th>تاريخ كتابة الفاتورة</th>
                  <th>تاريخ الدفع</th>
                  {/* <th>الدفع</th> */}
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
                    <td>{bill.invoiceDate || "-"}</td>
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
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
              <button className={styles.closeBtn} onClick={closeBillsModal}>إغلاق</button>
            </div>
          </div>
        </div>
      )}

      {/* مودال إضافة قراءة */}
      {showAddReadingModal && selectedUser && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox} style={{ maxWidth: 520 }}>
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
              <button className={styles.modalCancel} onClick={closeAddReadingModal}>إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast.show && <div className={`${styles.toast} ${toast.type === "success" ? styles.toastSuccess : styles.toastError}`}>{toast.msg}</div>}
    </div>
  );
};

export default AdminAllUsers;
