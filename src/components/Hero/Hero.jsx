 import React, { useState, useEffect } from "react"; // استيراد useEffect
import Modal from "react-modal";
  import styles from "./Hero.module.css";
import RegisterModal from "../AuthModal/RegisterModal/RegisterModal";
import LoginModal from "../AuthModal/LoginModal/LoginModal";
 

Modal.setAppElement("#root");

const Hero = () => {
  const [modalType, setModalType] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // حالة لبدء التحريك

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  // تشغيل التحريك بعد تحميل المكون
  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <div className={styles.textBox}>
            
            {/* العنوان الرئيسي (H1) - تأخير 0.3 ثانية */}
            <h1 
              className={`${styles.fadeItem} ${isLoaded ? styles.fadeIn : ''}`} 
              style={{animationDelay: '0.3s'}}
            >
              أهلاً بكم في الموقع الرسمي لشركة كهرباء غزة
            </h1>
            
            {/* الوصف (P) - تأخير 0.6 ثانية */}
            <p 
              className={`${styles.fadeItem} ${isLoaded ? styles.fadeIn : ''}`} 
              style={{animationDelay: '0.6s'}}
            >
              منصة ذكية لإدارة الاشتراكات، متابعة الاستهلاك، إصدار الفواتير،
              وتقديم البلاغات بسهولة وشفافية كاملة
            </p>

            {/* الأزرار (.buttons) - تأخير 0.9 ثانية */}
            <div 
              className={`${styles.buttons} ${styles.fadeItem} ${isLoaded ? styles.fadeIn : ''}`} 
              style={{animationDelay: '0.9s'}}
            >
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => openModal("register")}
              >
                اشترك الآن
              </button>

              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => openModal("login")}
              >
                تسجيل الدخول
              </button>
            </div>
          </div>

          <div className={styles.iconBox}>
            ⚡
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!modalType}
        onRequestClose={closeModal}
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <button className={styles.closeBtn} onClick={closeModal}>✕</button>
        {modalType === "register" && <RegisterModal />}
        {modalType === "login" && <LoginModal />}
      </Modal>
    </>
  );
};

export default Hero;