import styles from "./Services.module.css";
const Services = () => {
    const services = [
      {
        icon: "📊",
        title: "إدارة القراءات",
        description: "متابعة القراءة الشهرية بدقة ووضوح تام",
      },
      {
        icon: "💳",
        title: "الفواتير الذكية",
        description: "حساب تلقائي للاستهلاك وسعر الكيلو",
      },
      {
        icon: "💰",
        title: "المحفظة الإلكترونية",
        description: "متابعة المدفوعات والمبالغ المتبقية",
      },
      {
        icon: "🔧",
        title: "إبلاغ عن عطل",
        description: "إرسال البلاغات ومتابعتها مع فريق الصيانة",
      },
    ];
  
    return (
      <section className={styles.services} id="services">
        <div className={styles.container}>
          <h2 className={styles.title}>خدماتنا</h2>
          <p className={styles.subtitle}>
            نوفر لك كل ما تحتاجه لإدارة اشتراكك بسهولة
          </p>
  
          <div className={styles.cards}>
            {services.map((service, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  