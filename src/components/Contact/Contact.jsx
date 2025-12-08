import styles from "./Contact.module.css";
const Contact = () => {
    return (
      <>
        <section className="contact" id="contact">
          <div className={styles.contactContainer}>
            <h2>للشكاوي أو التواصل أو التبليغ عن عطل </h2>
            <div className={styles.formGroup}>
              <label>الاسم</label>
              <input type="text" placeholder="أدخل اسمك الكامل" />
            </div>
            <div className={styles.formGroup}>
              <label>رقم الجوال</label>
              <input type="tel" placeholder="05xxxxxxxx" />
            </div>
            <div className={styles.formGroup}>
              <label>الرسالة</label>
              <textarea placeholder="اكتب رسالتك هنا..."></textarea>
            </div>
            <button className={styles.submitBtn}>إرسال</button>
          </div>
        </section>
      </>
    );
  };
  
  export default Contact;
  