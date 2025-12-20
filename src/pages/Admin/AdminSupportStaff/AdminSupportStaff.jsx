 import React, { useEffect, useMemo, useState } from "react";
 
import styles from "./AdminSupportStaff.module.css";
import StaffControls from "../../../components/Admin/Staff/StaffControls/StaffControls";
import StaffTable from "../../../components/Admin/Staff/StaffTable/StaffTable";
import StaffPagination from "../../../components/Admin/Staff/StaffPagination/StaffPagination";
import AddEditModal from "../../../components/Admin/Staff/AddEditModal/AddEditModal";
import SalaryModal from "../../../components/Admin/Staff/SalaryModal/SalaryModal";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const AdminSupportStaff = () => {
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

  const goToPage = (p) => {
    const pp = Math.min(Math.max(1, p), totalPages);
    setPage(pp);
  };

  const handleSalaryModalOpen = (item) => {
    setSalaryItem(item);
    setShowSalaryModal(true);
  };

  const handleSalaryModalClose = () => {
    setSalaryItem(null);
    setShowSalaryModal(false);
  };

  return (
    <>
     
      <Breadcrumb title="الموظفين" />



      <div className={styles.headerActions}>
        <button className={styles.addBtn} onClick={handleAddOpen}>
          + إضافة موظف
        </button>
      </div>

      <StaffControls
        search={search}
        pageSize={pageSize}
        onSearchChange={(val) => {
          setSearch(val);
          setPage(1);
        }}
        onPageSizeChange={(val) => {
          setPageSize(val);
          setPage(1);
        }}
      />

      <StaffTable
        data={paginated}
        page={page}
        pageSize={pageSize}
        onEdit={handleEditOpen}
        onDelete={handleDelete}
        onSalary={handleSalaryModalOpen}
      />

      <StaffPagination
        page={page}
        totalPages={totalPages}
        filteredCount={filtered.length}
        onPageChange={goToPage}
      />

      {showAddModal && (
        <AddEditModal
          title="إضافة موظف جديد"
          form={form}
          onFormChange={setForm}
          onSave={handleAddSave}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && editItem && (
        <AddEditModal
          title={`تعديل بيانات الموظف: ${editItem.name}`}
          form={form}
          onFormChange={setForm}
          onSave={handleEditSave}
          onClose={() => {
            setShowEditModal(false);
            setEditItem(null);
          }}
        />
      )}

      {showSalaryModal && salaryItem && (
        <SalaryModal
          item={salaryItem}
          onClose={handleSalaryModalClose}
        />
      )}
</>
  );
};

export default AdminSupportStaff;
