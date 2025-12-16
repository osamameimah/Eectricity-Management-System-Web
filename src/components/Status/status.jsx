 import styles from "./status.module.css";

const Status = () => {
  const status = [
    { statNumber: "12,300+", statLabel: "مشترك نشط" },
    { statNumber: "1.5 ش", statLabel: "سعر الكيلو اليوم" },
    { statNumber: "850+", statLabel: "عطل تم إصلاحه" },
    { statNumber: "99.7%", statLabel: "دقة الفوترة" },
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.statsContainer}>
        {status.map((item, index) => (
          <div className={styles.statCard} key={index}>
            <span className={styles.statNumber}>{item.statNumber}</span>
            <span className={styles.statLabel}>{item.statLabel}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;
