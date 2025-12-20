import React from "react";
import styles from "./EmployeeTable.module.css";

const EmployeeTable = ({ employees, onEdit, onDelete, onPermissions }) => {
  const getRoleName = (role) => {
    return role === "super_admin" ? "مدير عام" : "مدير";
  };

  return (
    <div className={styles.tableCard}>
      <h3 className={styles.cardTitle}>قائمة المديرين</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم الكامل</th>
              <th>رقم الجوال</th>
              <th>البريد الإلكتروني</th>
              <th>الصلاحية</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="6" className={styles.empty}>
                  لم يتم إضافة مديرين بعد
                </td>
              </tr>
            ) : (
              employees.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td className={styles.name}>{emp.fullName}</td>
                  <td>{emp.phone}</td>
                  <td className={styles.email}>{emp.email}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[emp.role]}`}>
                      {getRoleName(emp.role)}
                    </span>
                  </td>
                  <td className={styles.actions}>
                    <button
                      className={styles.permissionsBtn}
                      onClick={() => onPermissions(emp)}
                      title="إدارة الصلاحيات"
                    >
                      🔐 صلاحيات
                    </button>
                    <button
                      className={styles.editBtn}
                      onClick={() => onEdit(emp)}
                      title="تعديل"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => onDelete(emp.id)}
                      title="حذف"
                    >
                      🗑️ حذف
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;