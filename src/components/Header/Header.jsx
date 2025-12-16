 import styles from "./Header.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import RegisterModal from "../AuthModal/RegisterModal/RegisterModal";
import LoginModal from "../AuthModal/LoginModal/LoginModal";
  
Modal.setAppElement("#root");

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (type) => {
    if (type === "subscribe") setModalContent(<RegisterModal />);
    if (type === "login") setModalContent(<LoginModal />);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <Link to="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <div className={`${styles.logoIcon} ${menuOpen ? styles.rotateLogo : ""}`}>⚡</div>
              <span>شركة كهرباء غزة</span>
            </div>
          </Link>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>الرئيسية</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>من نحن</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>خدماتنا</a></li>
            <li><a href="#payment" onClick={() => setMenuOpen(false)}>طرق الدفع</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>اتصل بنا</a></li>

            {/* الأزرار على الأجهزة الصغيرة */}
            <div className={styles.navButtonsResponsive}>
              <button
                className={`${styles.btnSecondary} ${styles.btn}`}
                onClick={() => { openModal("login"); setMenuOpen(false); }}
              >
                تسجيل دخول
              </button>

              <button
                className={`${styles.btnPrimary} ${styles.btn}`}
                onClick={() => { openModal("subscribe"); setMenuOpen(false); }}
              >
                اشترك الان
              </button>
            </div>
          </ul>

          {/* الأزرار على الشاشات الكبيرة */}
          <div className={styles.navButtons}>
            <button
              className={`${styles.btnSecondary} ${styles.btn}`}
              onClick={() => openModal("login")}
            >
              تسجيل دخول
            </button>

            <button
              className={`${styles.btnPrimary} ${styles.btn}`}
              onClick={() => openModal("subscribe")}
            >
              اشترك الان
            </button>
          </div>

          <div className={`${styles.hamburger} ${menuOpen ? styles.activeHamburger : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
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
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
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
