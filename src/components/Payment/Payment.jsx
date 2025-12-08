import styles from "./Payment.module.css";
const Payment = ()=>{
    return(
        <>
        
        <section className={styles.payment} id="payment">
            <div className={styles.paymentContainer}>
              <h2 className={styles.sectionTitle}>طرق الدفع المتاحة</h2>
              <p className={styles.sectionSubtitle}>ادفع بالطريقة التي تناسبك</p>
              <div className={styles.paymentGrid}>
                <div className={styles.paymentCard}>
                  <span>💳 Jawwal Pay</span>
                </div>
                <div className={styles.paymentCard}>
                  <span>💵 PalPay</span>
                </div>
                <div className={styles.paymentCard}>
                  <span>💰 نقداً</span>
                </div>
                <div className={styles.paymentCard}>
                  <span>🏦 بنك فلسطين</span>
                </div>
              </div>
            </div>
          </section>
        </>
    )
    
    }
    
    export default Payment;