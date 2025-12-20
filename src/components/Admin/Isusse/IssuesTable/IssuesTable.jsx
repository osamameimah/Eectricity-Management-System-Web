import React from "react";
import styles from "./IssuesTable.module.css";

const IssuesTable = ({ issues, openSolveModal }) => {
  return (
    <div className={styles.issueWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>المشترك</th>
            <th>العنوان</th>
            <th>رقم الطبالون</th>
            <th>تفاصيل العطل</th>
            <th>حالة العطل</th>
            <th>الموظف الذي حل المشكلة</th>
            <th>تاريخ الحل</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {issues.length === 0 ? (
            <tr>
              <td colSpan="8">لا توجد أعطال مسجلة بعد</td>
            </tr>
          ) : (
            issues.map((issue, index) => (
              <tr key={index}>
                <td>{issue.subscriber}</td>
                <td>{issue.address}</td>
                <td>{issue.pumper}</td>
                <td>{issue.details}</td>
                <td
                  style={{
                    color: issue.status === "تم الحل" ? "green" : "#905f00",
                    fontWeight: "bold",
                  }}
                >
                  {issue.status}
                </td>
                <td>{issue.solvedBy || "-"}</td>
                <td>{issue.solvedDate || "-"}</td>
                <td>
                  <button
                    className={styles.detailsBtn}
                    onClick={() => openSolveModal(index)}
                    disabled={issue.status === "تم الحل"}
                  >
                    {issue.status === "قيد التنفيذ" ? "تم الحل" : "تم الحل"}
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

export default IssuesTable;
