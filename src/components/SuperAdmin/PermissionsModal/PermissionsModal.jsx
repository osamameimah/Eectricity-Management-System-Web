import React, { useState } from "react";
import styles from "./PermissionsModal.module.css";

const PermissionsModal = ({ employee, onPermissionsChange, onClose }) => {
  const [permissions, setPermissions] = useState(employee.permissions || {});

  const permissionsList = [
    { key: "viewDashboard", label: "عرض لوحة التحكم", icon: "📊" },
    { key: "viewReadings", label: "عرض القراءات", icon: "📈" },
    { key: "viewWallet", label: "عرض المحفظة", icon: "💰" },
    { key: "managePanels", label: "إدارة الطابلونات", icon: "⚡" },
    { key: "manageStaff", label: "إدارة الموظفين", icon: "👥" },
    { key: "manageBills", label: "إدارة الفواتير", icon: "📄" },
    { key: "viewReports", label: "عرض التقارير", icon: "📋" },
    { key: "editSettings", label: "تعديل الإعدادات", icon: "⚙️" },
  ];

  const handlePermissionToggle = (key) => {
    setPermissions({
      ...permissions,
      [key]: !permissions[key],
    });
  };

  const handleSave = () => {
    onPermissionsChange(permissions);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            إدارة صلاحيات: {employee.fullName}
          </h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.permissionsGrid}>
          {permissionsList.map((perm) => (
            <label key={perm.key} className={styles.permissionItem}>
              <input
                type="checkbox"
                checked={permissions[perm.key] || false}
                onChange={() => handlePermissionToggle(perm.key)}
                className={styles.checkbox}
              />
              <div className={styles.permissionLabel}>
                <span className={styles.icon}>{perm.icon}</span>
                <span>{perm.label}</span>
              </div>
            </label>
          ))}
        </div>

        <div className={styles.modalActions}>
          <button className={styles.saveBtn} onClick={handleSave}>
            💾 حفظ الصلاحيات
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;