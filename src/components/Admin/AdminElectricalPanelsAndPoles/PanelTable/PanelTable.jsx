import React from "react";
import styles from "./PanelTable.module.css";

const PanelTable = ({ panels, onEdit, onDelete }) => {
  return (
    <div className={styles.tableCard}>
      <h3 className={styles.cardTitle}>قائمة الطابلونات</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>رقم الطابلون</th>
              <th>العنوان</th>
              <th>ملاحظات</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {panels.length === 0 ? (
              <tr>
                <td colSpan="5" className={styles.empty}>
                  لا توجد طابلونات مسجلة بعد
                </td>
              </tr>
            ) : (
              panels.map((panel, index) => (
                <tr key={panel.id}>
                  <td>{index + 1}</td>
                  <td className={styles.panelNumber}>{panel.panelNumber}</td>
                  <td className={styles.address}>{panel.address}</td>
                  <td className={styles.notes}>{panel.notes || "-"}</td>
                  <td className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => onEdit(panel)}
                      title="تعديل"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => onDelete(panel.id)}
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

export default PanelTable;