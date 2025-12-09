 import styles from "./Faq.module.css";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "كيف أسجل في النظام؟",
      answer:
        'اضغط على "اشتراك جديد" وقم بتعبئة النموذج بكامل البيانات المطلوبة. سيتم مراجعة طلبك من قبل الإدارة والموافقة عليه خلال 24-48 ساعة.',
    },
    {
      question: "كيف أحسب قيمة استهلاكي؟",
      answer:
        "يتم حساب الاستهلاك بطرح القراءة السابقة من القراءة الحالية، ثم ضرب الناتج في سعر الكيلو الحالي. النظام يقوم بذلك تلقائياً.",
    },
    {
      question: "كيف أبلغ عن عطل؟",
      answer:
        'من لوحة التحكم الخاصة بك، اذهب إلى "الإبلاغ عن عطل" واملأ التفاصيل المطلوبة. سيتم إرسال فريق الصيانة في أقرب وقت ممكن.',
    },
    {
      question: "كيفية ترشيد استهلاك الكهرباء",
      answer:
        'من خلال إطفاء كافة الأجهزة الغير مستخدمة، واستخدام مصابيح LED لتوفير الطاقة.',
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.faqContainer}>
        <h2 className={styles.sectionTitle}>الأسئلة الشائعة</h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFaq(index)}
            >
              <span>{item.question}</span>
              <span className={styles.faqIcon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={styles.faqAnswer}
              style={{
                maxHeight: openIndex === index ? "500px" : "0px",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
