import styles from"./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>معلومات قانونية</h3>
            <ul>
              <li>
                <Link to="/PrivacyPolicyFooter">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="/TermsOfUse">شروط الاستخدام</Link>
              </li>
              <li>
                <Link to="/ReturnPolicy">سياسة الاسترجاع</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>تواصل معنا</h3>
            <ul>
              <li>📞 +970-59-xxx-xxxx</li>
              <li>📧 info@electric.ps</li>
              <li>📍 غزة - فلسطين</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 شركة الكهرباء. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
