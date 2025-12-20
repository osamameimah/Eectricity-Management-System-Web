import { useState, useEffect } from "react";

import styles from "./SuperAdminNewEmployee.module.css";
import SuccessNotification from "../../../components/SuperAdmin/SuccessNotification/SuccessNotification";
import EmployeeForm from "../../../components/SuperAdmin/EmployeeForm/EmployeeForm";
import EmployeeTable from "../../../components/SuperAdmin/EmployeeTable/EmployeeTable";
import AddEditModal from "../../../components/SuperAdmin/AddEditModal/AddEditModal";
import PermissionsModal from "../../../components/SuperAdmin/PermissionsModal/PermissionsModal";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const SuperAdminNewEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [notification, setNotification] = useState(null);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const LOCAL_KEY = "admin_employees_v1";

  const emptyForm = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
    role: "admin",
    permissions: {
      viewDashboard: true,
      viewReadings: false,
      viewWallet: false,
      managePanels: false,
      manageStaff: false,
      manageBills: false,
      viewReports: false,
      editSettings: false,
    },
  };

  const [formData, setFormData] = useState(emptyForm);

  // Load data from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      try {
        setEmployees(JSON.parse(raw));
      } catch (e) {
        setEmployees([]);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(employees));
  }, [employees]);

  // إظهار إشعار النجاح
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // فتح مودال الإضافة
  const handleAddOpen = () => {
    setFormData(emptyForm);
    setEditingEmployee(null);
    setShowModal(true);
  };

  // فتح مودال التعديل
  const handleEditOpen = (employee) => {
    setFormData(employee);
    setEditingEmployee(employee);
    setShowModal(true);
  };

  // فتح مودال الصلاحيات
  const handlePermissionsOpen = (employee) => {
    setSelectedEmployee(employee);
    setShowPermissionsModal(true);
  };

  // تحديث الصلاحيات
  const handlePermissionsUpdate = (permissions) => {
    setEmployees(
      employees.map((e) =>
        e.id === selectedEmployee.id ? { ...e, permissions } : e
      )
    );
    setShowPermissionsModal(false);
    showNotification("تم تحديث الصلاحيات بنجاح ✓");
  };

  // حفظ (إضافة أو تعديل)
  const handleSave = () => {
    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      showNotification("يرجى ملء جميع الحقول المطلوبة", "error");
      return;
    }

    if (!/^05\d{8}$/.test(formData.phone)) {
      showNotification("رقم الجوال غير صحيح", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showNotification("البريد الإلكتروني غير صحيح", "error");
      return;
    }

    if (editingEmployee) {
      // تعديل
      setEmployees(
        employees.map((e) =>
          e.id === editingEmployee.id ? { ...formData, id: e.id } : e
        )
      );
      showNotification("تم تعديل المدير بنجاح ✓");
    } else {
      // إضافة
      setEmployees([...employees, { ...formData, id: Date.now() }]);
      showNotification("تم إضافة المدير بنجاح ✓");
    }

    setShowModal(false);
    setFormData(emptyForm);
  };

  // حذف
  const handleDelete = (id) => {
    if (window.confirm("هل متأكد من حذف هذا المدير؟")) {
      setEmployees(employees.filter((e) => e.id !== id));
      showNotification("تم حذف المدير بنجاح ✓");
    }
  };

  return (
    <>

   

            <Breadcrumb title="إضافة مدير جديد" />
      

      {notification && (
        <SuccessNotification
          message={notification.message}
          type={notification.type}
        />
      )}

      <EmployeeForm onAddClick={handleAddOpen} />

      <EmployeeTable
        employees={employees}
        onEdit={handleEditOpen}
        onDelete={handleDelete}
        onPermissions={handlePermissionsOpen}
      />

      {showModal && (
        <AddEditModal
          title={
            editingEmployee
              ? `تعديل المدير: ${editingEmployee.fullName}`
              : "إضافة مدير جديد"
          }
          formData={formData}
          onFormChange={setFormData}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false);
            setFormData(emptyForm);
            setEditingEmployee(null);
          }}
        />
      )}

      {showPermissionsModal && selectedEmployee && (
        <PermissionsModal
          employee={selectedEmployee}
          onPermissionsChange={handlePermissionsUpdate}
          onClose={() => {
            setShowPermissionsModal(false);
            setSelectedEmployee(null);
          }}
        />
      )}
    </>
  );
};

export default SuperAdminNewEmployee;