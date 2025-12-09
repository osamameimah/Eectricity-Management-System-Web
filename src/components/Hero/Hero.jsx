 import React, { useState } from "react";
import Modal from "react-modal";
import Dashboard from "../../pages/Dashboard/Dashboard";
import NewRegister from "../../pages/NewRegister/NewRegister";
import styles from "./Hero.module.css";

Modal.setAppElement("#root");

const Hero = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <div className={styles.textBox}>
            <h1>نظام إدارة المشتركين</h1>
            <p>
              منصة ذكية لإدارة الاشتراكات، متابعة الاستهلاك، إصدار الفواتير،
              وتقديم البلاغات بسهولة وشفافية كاملة
            </p>

            <div className={styles.buttons}>
              <button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => openModal("register")}
              >
                اشترك الآن
              </button>

              <button
                className={`${styles.btn} ${styles.secondary}`}
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
        {modalType === "register" && <NewRegister />}
        {modalType === "login" && <Dashboard />}
      </Modal>
    </>
  );
};

export default Hero;
