import React from "react";
import styles from "./HistoryCard.module.css";
import { History } from "lucide-react";

const HistoryCard = ({ priceHistory }) => {
  return (
    <div className={styles.historyCard}>
      <div className={styles.historyHeader}>
        <History size={20} />
        <h3>سجل تغييرات أسعار الكيلو</h3>
      </div>

      <table className={styles.historyTable}>
        <thead>
          <tr>
            <th>السعر القديم</th>
            <th>السعر الجديد</th>
            <th>التاريخ</th>
          </tr>
        </thead>

        <tbody>
          {priceHistory.length === 0 ? (
            <tr>
              <td colSpan={3}>لا يوجد تغييرات بعد</td>
            </tr>
          ) : (
            priceHistory
              .slice(0, 5)
              .map((item, i) => (
                <tr key={i}>
                  <td>{item.oldPrice}</td>
                  <td>{item.newPrice}</td>
                  <td>{item.date}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryCard;
