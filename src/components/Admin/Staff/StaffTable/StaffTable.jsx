import React from "react";
import styles from "./StaffTable.module.css";

const StaffTable = ({ data, page, pageSize, onEdit, onDelete, onSalary }) => {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>الرقم</th>
            <th>اسم الموظف</th>
            <th>رقم الجوال</th>
            <th>الهوية</th>
            <th>العنوان</th>
            <th>الاختصاص</th>
            <th>عدد الأعطال</th>
            <th>تاريخ التوظيف</th>
            <th>ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="9" className={styles.emptyMsg}>
                لا توجد بيانات لعرضها
              </td>
            </tr>
          ) : (
            data.map((s, idx) => (
              <tr key={s.id}>
                <td>{(page - 1) * pageSize + idx + 1}</td>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td>{s.nationalId}</td>
                <td className={styles.addressCell}>{s.address}</td>
                <td>{s.specialty}</td>
                <td>{s.ticketsDone}</td>
                <td>{s.hireDate}</td>
                <td className={styles.actionsTd}>
                  <button 
                    className={styles.editBtn} 
                    onClick={() => onEdit(s)}
                    title="تعديل"
                  >
                    تعديل
                  </button>
                  <button 
                    className={styles.deleteBtn} 
                    onClick={() => onDelete(s.id)}
                    title="حذف"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;