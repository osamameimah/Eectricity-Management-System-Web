 import React from "react";
import styles from "./WalletTable.module.css";

const WalletTable = ({ readings, currentPrice }) => {
  return (
    <div className={styles.walletTable}>
      <h3>تفاصيل الفواتير</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>تاريخ إصدار الفاتورة</th>
            <th>قيمة الفاتورة</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {readings.map((bill, index) => (
            <tr key={index}>
              <td>{bill.date}</td>
              <td>{bill.consumption * currentPrice} ₪</td>
              <td className={styles.unpaid}>غير مدفوعة</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletTable;
