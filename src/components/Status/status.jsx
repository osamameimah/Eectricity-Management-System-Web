import styles from "./status.module.css";
const Status = () => {
    return(
      <>
          <section className={styles.stats}>
          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>12,300+</span>
              <span className={styles.statLabel}>مشترك نشط</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>1.5 ش</span>
              <span className={styles.statLabel}>سعر الكيلو اليوم</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>850+</span>
              <span className={styles.statLabel}>عطل تم إصلاحه</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>99.7%</span>
              <span className={styles.statLabel}>دقة الفوترة</span>
            </div>
          </div>
        </section>
     
     
      </> 
    );
    
  };
  
  export default Status;
  