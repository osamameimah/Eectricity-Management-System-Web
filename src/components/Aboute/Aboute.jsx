
import styles from "./Aboute.module.css";

const About = ()=>{
    return(
        <>
              <section className={styles.about} id="about">
            <div className={styles.aboutContainer}>
              <h2 className={styles.sectionTitle}>من نحن</h2>
              <p className={styles.sectionSubtitle}>
                شركة رائدة في مجال توفير الطاقة الكهربائية بخدمات موثوقة ومتطورة
              </p>
              <div className={styles.aboutContent}>
                <div className={styles.aboutCard}>
                  <div className={styles.aboutIcon}>🏢</div>
                  <h3>تأسست عام 2015</h3>
                  <p>خبرة تمتد لأكثر من 8 سنوات في خدمة المواطنين</p>
                </div>
                <div className={styles.aboutCard}>
                  <div className={styles.aboutIcon}>⚡</div>
                  <h3>طاقة مستدامة</h3>
                  <p>نسعى لتوفير كهرباء نظيفة ومستدامة لجميع المشتركين</p>
                </div>
                <div className={styles.aboutCard}>
                  <div className={styles.aboutIcon}>🛡️</div>
                  <h3>موثوقية عالية</h3>
                  <p>نضمن استمرارية الخدمة مع أعلى معايير الجودة</p>
                </div>
              </div>
            </div>
          </section>
        
        </>
    )
    
    
    }
    
    export default About;