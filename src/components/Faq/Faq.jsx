
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
        'من لوحة التحكم الخاصة بك، اذهب إلى "الإبلاغ عن عطل" واملأ التفاصيل المطلوبة. أو بالنزول للاسفل وتعيئة الفورم سيتم إرسال فريق الصيانة في أقرب وقت ممكن.',
    },
    {
      question: "كيفية ترشيد استهلاك الكهرباء",
      answer:
        'من خلال اطفاء كافة الاجهزة الغير مستعملة , واستخذام مصابيح ال led ',
    },

    
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.faqContainer}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
          الأسئلة الشائعة
        </h2>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFaq(index)}
              style={{ cursor: "pointer" }}
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className={styles.faqAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
