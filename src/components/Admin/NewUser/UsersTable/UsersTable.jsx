import React from "react";
import styles from "./UsersTable.module.css";

const UsersTable = ({ users, openModal, openEditModal, disabledButtons }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الهوية</th>
            <th>العنوان</th>
            <th>رقم الجوال</th>
            <th>التاريخ</th>
            <th>أقرب طبلون</th>
            <th>الحالة</th>
            <th>ملاحظات</th>
            <th>الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>{user.panel}</td>
              <td>{user.status}</td>
              <td>{user.notes || "—"}</td>

              <td className={styles.actionsTd}>
                <button
                  className={`${styles.actionBtn} ${styles.acceptBtn}`}
                  onClick={() => openModal(user, "approve")}
                  disabled={disabledButtons[user.id]}
                >
                  موافقة
                </button>

                <button
                  className={`${styles.actionBtn} ${styles.rejectBtn}`}
                  onClick={() => openModal(user, "reject")}
                  disabled={disabledButtons[user.id]}
                >
                  رفض
                </button>

                <button
                  className={`${styles.actionBtn} ${styles.editBtn}`}
                  onClick={() => openEditModal(user)}
                >
                  تعديل
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
