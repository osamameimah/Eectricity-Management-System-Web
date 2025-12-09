 import styles from "./Aboute.module.css";

const About = () => {
  const aboutData = [
    {
      icon: "🏢",
      title: "تأسست عام 2015",
      desc: "خبرة تمتد لأكثر من 8 سنوات في خدمة المواطنين",
    },
    {
      icon: "⚡",
      title: "طاقة مستدامة",
      desc: "نسعى لتوفير كهرباء نظيفة ومستدامة لجميع المشتركين",
    },
    {
      icon: "🛡️",
      title: "موثوقية عالية",
      desc: "نضمن استمرارية الخدمة مع أعلى معايير الجودة",
    },
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <h2 className={styles.sectionTitle}>من نحن</h2>
        <p className={styles.sectionSubtitle}>
          شركة رائدة في مجال توفير الطاقة الكهربائية بخدمات موثوقة ومتطورة
        </p>
        <div className={styles.aboutContent}>
          {aboutData.map((item, index) => (
            <div key={index} className={styles.aboutCard}>
              <div className={styles.aboutIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
 