 import React from "react";
import styles from "./UsersTable.module.css";

const UsersTable = ({ users, paginated, openBillsModal, openAddReadingModal, hasUnpaid }) => {
  return (
    <div className={styles.issueWrapper}>
      <div className={styles.tableWrapper}>
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
    </div>
  );
};

export default UsersTable;
