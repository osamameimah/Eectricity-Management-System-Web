import React from "react";
import styles from "./ReadingModal.module.css";

const ReadingModal = ({ reading, onClose, onImageClick }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalBox}>
      <h2>تفاصيل قراءة شهر {reading.month}</h2>
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>القراءة السابقة</th>
            <th>القراءة الحالية</th>
            <th>الاستهلاك</th>
            <th>تاريخ القراءة</th>
            <th>السعر</th>
            <th>صورة القراءة</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((week) => {
            const prev = reading.previous + (week - 1) * 40;
            const curr = prev + 40;
            return (
              <tr key={week}>
                <td>{prev}</td>
                <td>{curr}</td>
                <td className={styles.consumption}>{curr - prev}</td>
                <td>22-01-2021</td>
                <td>55</td>
                <td>
                  <img
                    src={reading.image}
                    alt="صورة القراءة"
                    className={styles.readingImage}
                    onClick={() => onImageClick(reading.image)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={styles.closeBtn} onClick={onClose}>
        إغلاق
      </button>
    </div>
  </div>
);

export default ReadingModal;
