import styles from"./Header.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import NewRegister from "../../pages/NewRegister/NewRegister";
import Dashboard from "../../pages/Dashboard/Dashnoard";
  Modal.setAppElement("#root");

  const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  
    const openModal = (type) => {
      if (type === "subscribe") setModalContent(<NewRegister />);
      if (type === "login") setModalContent(<Dashboard />);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <>
        <header className={styles.header}>
          <nav className={styles.navContainer}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>⚡</div>
              <span>شركة كهرباء غزة</span>
            </div>
            <ul className={styles.navLinks}>
              <li><a href="#contact">اتصل بنا</a></li>
              <li><a href="#payment">طرق الدفع</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#home">الرئيسية</a></li>
            </ul>
            <div className={styles.navButtons}>
              <button className={`${styles.btnSecondary} ${styles.btn}`} onClick={() => openModal("login")}>
                تسجيل دخول
              </button>
              
              <button className={`${styles.btnPrimary} ${styles.btn}`} onClick={() => openModal("subscribe")}>
                اشتراك جديد

                
              </button>
            </div>
          </nav>
        </header>
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="مودال"
          style={{
            overlay: { backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1000 },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
              maxHeight: "90vh",
              width: "90%",
              maxWidth: "900px",
              overflowY: "auto",
              padding: "0",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            },
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            {modalContent}
  
          </div>
        </Modal>
      </>
    );
  };
  
  export default Header;
  