 import styles from "./Payment.module.css";

const Payment = () => {
  const paymentMethods = [
    { icon: "💳", name: "Jawwal Pay" },
    { icon: "💵", name: "PalPay" },
    { icon: "💰", name: "نقداً" },
    { icon: "🏦", name: "بنك فلسطين" },
  ];

  return (
    <section className={styles.payment} id="payment">
      <div className={styles.paymentContainer}>
        <h2 className={styles.sectionTitle}>طرق الدفع المتاحة</h2>
        <p className={styles.sectionSubtitle}>ادفع بالطريقة التي تناسبك بسهولة وأمان</p>

        <div className={styles.paymentGrid}>
          {paymentMethods.map((method, index) => (
            <div key={index} className={styles.paymentCard}>
              <div className={styles.paymentIcon}>{method.icon}</div>
              <span className={styles.paymentName}>{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;
