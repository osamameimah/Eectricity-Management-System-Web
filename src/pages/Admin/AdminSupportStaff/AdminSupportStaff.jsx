 // AdminSupportStaff.jsx
import React, { useEffect, useMemo, useState } from "react";
import styles from "./AdminSupportStaff.module.css";

const AdminSupportStaff = () => {
  const [activeTab, setActiveTab] = useState("kilo");

  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    kilo: "الموظفين",
  };

  const LOCAL_KEY = "ems_support_staff_v2";

  const sampleData = [
    {
      id: 1,
      name: "محمد علي",
      phone: "0599000001",
      nationalId: "12345678901234",
      address: "غزة - النصر",
      specialty: "فني عدادات",
      ticketsDone: 12,
      salary: 400,
      vacations: 2,
      hireDate: "2023-01-15",
      monthlySalaries: [400, 400, 400, 400],
    },
    {
      id: 2,
      name: "أحمد خالد",
      phone: "0599000002",
      nationalId: "23456789012345",
      address: "غزة - الشجاعية",
      specialty: "فني شبكات",
      ticketsDone: 8,
      salary: 420,
      vacations: 1,
      hireDate: "2023-03-10",
      monthlySalaries: [420, 420, 420, 420],
    },
    {
      id: 3,
      name: "سعيد محمود",
      phone: "0599000003",
      nationalId: "34567890123456",
      address: "خانيونس",
      specialty: "فني كهرباء",
      ticketsDone: 20,
      salary: 450,
      vacations: 0,
      hireDate: "2022-12-05",
      monthlySalaries: [450, 450, 450, 450],
    },
  ];

  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [showSalaryModal, setShowSalaryModal] = useState(false);
  const [salaryItem, setSalaryItem] = useState(null);

  const emptyForm = {
    name: "",
    phone: "",
    nationalId: "",
    address: "",
    specialty: "",
    ticketsDone: 0,
    salary: 0,
    vacations: 0,
    hireDate: "",
    monthlySalaries: [],
  };
  const [form, setForm] = useState(emptyForm);

  // Load data from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      try {
        setStaff(JSON.parse(raw));
        return;
      } catch (e) {}
    }
    setStaff(sampleData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(staff));
  }, [staff]);

  // Filtered list
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return staff;
    return staff.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.phone && s.phone.includes(q)) ||
        (s.nationalId && s.nationalId.includes(q)) ||
        (s.specialty && s.specialty.toLowerCase().includes(q))
    );
  }, [staff, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  // Helpers
  const resetForm = () => setForm(emptyForm);

  const handleAddOpen = () => {
    resetForm();
    setShowAddModal(true);
  };

  const handleAddSave = () => {
    if (!form.name || !form.phone) {
      alert("يرجى ملء الاسم ورقم الجوال على الأقل.");
      return;
    }
    const nextId = staff.length > 0 ? Math.max(...staff.map((s) => s.id)) + 1 : 1;
    setStaff([{ id: nextId, ...form }, ...staff]);
    setShowAddModal(false);
    setPage(1);
  };

  const handleEditOpen = (item) => {
    setEditItem(item);
    setForm({ ...item });
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    if (!form.name || !form.phone) {
      alert("يرجى ملء الاسم ورقم الجوال على الأقل.");
      return;
    }
    setStaff(staff.map((s) => (s.id === form.id ? { ...form } : s)));
    setShowEditModal(false);
    setEditItem(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("هل متأكد من حذف هذا الموظف؟ سيتم فقدان البيانات.")) return;
    setStaff(staff.filter((s) => s.id !== id));
  };

  // Pagination
  const goToPage = (p) => {
    const pp = Math.min(Math.max(1, p), totalPages);
    setPage(pp);
  };

  const renderPageNumbers = () => {
    const range = [];
    const delta = 2;
    const left = Math.max(1, page - delta);
    const right = Math.min(totalPages, page + delta);

    if (left > 1) {
      range.push(1);
      if (left > 2) range.push("...");
    }

    for (let i = left; i <= right; i++) range.push(i);

    if (right < totalPages) {
      if (right < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range.map((p, idx) =>
      p === "..." ? (
        <span key={"dots-" + idx} className={styles.pageDots}>
          ...
        </span>
      ) : (
        <button
          key={p}
          className={`${styles.pageBtn} ${p === page ? styles.pageActive : ""}`}
          onClick={() => goToPage(p)}
        >
          {p}
        </button>
      )
    );
  };

  // Salary Modal handlers
  const handleSalaryModalOpen = (item) => {
    setSalaryItem(item);
    setShowSalaryModal(true);
  };
  const handleSalaryModalClose = () => {
    setSalaryItem(null);
    setShowSalaryModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>

      <div className={styles.headerActions}>
        <button className={styles.addBtn} onClick={handleAddOpen}>
          + إضافة موظف
        </button>
      </div>

      <div className={styles.controls}>
        <input
          type="search"
          placeholder="ابحث بالاسم، الهاتف، أو الاختصاص..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className={styles.searchInput}
        />

        <div className={styles.pageSizeWrap}>
          <label>عرض</label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {[5, 6, 8, 10, 15, 20].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <label>سطر / صفحة</label>
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>الرقم</th>
              <th>اسم الموظف</th>
              <th>الجوال</th>
              <th>الهوية</th>
              <th>العنوان</th>
              <th>الاختصاص</th>
              <th>عدد الأعطال</th>
              <th>الراتب</th>
              <th>الإجازات</th>
              <th>تاريخ التوظيف</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan="11" style={{ textAlign: "center", padding: "1.2rem" }}>
                  لا توجد بيانات لعرضها
                </td>
              </tr>
            ) : (
              paginated.map((s, idx) => (
                <tr key={s.id}>
                  <td>{(page - 1) * pageSize + idx + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.phone}</td>
                  <td>{s.nationalId}</td>
                  <td>{s.address}</td>
                  <td>{s.specialty}</td>
                  <td>{s.ticketsDone}</td>
                  <td>{s.salary} ₪</td>
                  <td>{s.vacations}</td>
                  <td>{s.hireDate}</td>
                  <td className={styles.actionsTd}>
                    <button className={styles.editBtn} onClick={() => handleEditOpen(s)}>
                      تعديل
                    </button>
                    <button className={styles.deleteBtn} onClick={() => handleDelete(s.id)}>
                      حذف
                    </button>
                    <button className={styles.salaryBtn} onClick={() => handleSalaryModalOpen(s)}>
                      الرواتب
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.pagingInfo}>
          <span>
            إجمالي الموظفين: <strong>{filtered.length}</strong>
          </span>
          <span>
            الصفحة {page} من {totalPages}
          </span>
        </div>

        <div className={styles.pagingControls}>
          <button className={styles.pageBtn} onClick={() => goToPage(1)} disabled={page === 1}>
            « الأولى
          </button>
          <button className={styles.pageBtn} onClick={() => goToPage(page - 1)} disabled={page === 1}>
            ‹ السابق
          </button>

          {renderPageNumbers()}

          <button className={styles.pageBtn} onClick={() => goToPage(page + 1)} disabled={page === totalPages}>
            التالي ›
          </button>
          <button className={styles.pageBtn} onClick={() => goToPage(totalPages)} disabled={page === totalPages}>
            الأخيرة »
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3>إضافة موظف جديد</h3>
            <div className={styles.formGrid}>
              <label>اسم الموظف</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <label>رقم الجوال</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <label>الهوية</label>
              <input value={form.nationalId} onChange={(e) => setForm({ ...form, nationalId: e.target.value })} />
              <label>العنوان</label>
              <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              <label>الاختصاص</label>
              <input value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} />
              <label>الراتب</label>
              <input
                type="number"
                value={form.salary}
                onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })}
              />
              <label>عدد الأعطال التي أنجزها</label>
              <input
                type="number"
                value={form.ticketsDone}
                onChange={(e) => setForm({ ...form, ticketsDone: Number(e.target.value) })}
              />
              <label>الإجازات</label>
              <input
                type="number"
                value={form.vacations}
                onChange={(e) => setForm({ ...form, vacations: Number(e.target.value) })}
              />
              <label>تاريخ التوظيف</label>
              <input type="date" value={form.hireDate} onChange={(e) => setForm({ ...form, hireDate: e.target.value })} />
              <label>الرواتب الشهرية (افصل بالقيمة بفاصلة)</label>
              <input
                value={form.monthlySalaries.join(",")}
                onChange={(e) =>
                  setForm({ ...form, monthlySalaries: e.target.value.split(",").map((n) => Number(n)) })
                }
              />
            </div>
            <div className={styles.modalActions}>
              <button className={styles.actionBtn} onClick={handleAddSave}>
                حفظ
              </button>
              <button className={styles.closeBtn} onClick={() => setShowAddModal(false)}>
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editItem && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3>تعديل بيانات الموظف: {editItem.name}</h3>
            <div className={styles.formGrid}>
              <label>اسم الموظف</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <label>رقم الجوال</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <label>الهوية</label>
              <input value={form.nationalId} onChange={(e) => setForm({ ...form, nationalId: e.target.value })} />
              <label>العنوان</label>
              <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              <label>الاختصاص</label>
              <input value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} />
              <label>الراتب</label>
              <input
                type="number"
                value={form.salary}
                onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })}
              />
              <label>عدد الأعطال التي أنجزها</label>
              <input
                type="number"
                value={form.ticketsDone}
                onChange={(e) => setForm({ ...form, ticketsDone: Number(e.target.value) })}
              />
              <label>الإجازات</label>
              <input
                type="number"
                value={form.vacations}
                onChange={(e) => setForm({ ...form, vacations: Number(e.target.value) })}
              />
              <label>تاريخ التوظيف</label>
              <input type="date" value={form.hireDate} onChange={(e) => setForm({ ...form, hireDate: e.target.value })} />
              <label>الرواتب الشهرية (افصل بالقيمة بفاصلة)</label>
              <input
                value={form.monthlySalaries.join(",")}
                onChange={(e) =>
                  setForm({ ...form, monthlySalaries: e.target.value.split(",").map((n) => Number(n)) })
                }
              />
            </div>
            <div className={styles.modalActions}>
              <button className={styles.actionBtn} onClick={handleEditSave}>
                حفظ التعديلات
              </button>
              <button
                className={styles.closeBtn}
                onClick={() => {
                  setShowEditModal(false);
                  setEditItem(null);
                }}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Salary Modal */}
      {showSalaryModal && salaryItem && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3>الرواتب الشهرية للموظف: {salaryItem.name}</h3>
            <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
              {salaryItem.monthlySalaries.length === 0 ? (
                <li>لا توجد رواتب محفوظة</li>
              ) : (
                salaryItem.monthlySalaries.map((sal, idx) => (
                  <li key={idx}>
                    الشهر {idx + 1}: {sal} ₪
                  </li>
                ))
              )}
            </ul>
            <div className={styles.modalActions}>
              <button className={styles.closeBtn} onClick={handleSalaryModalClose}>
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSupportStaff;
