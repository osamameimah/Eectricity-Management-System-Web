import React, { useState } from "react";
import Modal from "react-modal";
  import Dashboard from "../pages/Dashboard/Dashnoard";
 import NewRegister from "../pages/NewRegister";

Modal.setAppElement("#root");

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    if (type === "subscribe") setModalContent(<NewRegister />);
    if (type === "login") setModalContent(<Dashboard />);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>نظام إدارة المشتركين</h1>
            <p>
              نظام متكامل يتيح لك متابعة استهلاكك بدقة، وإدارة اشتراكاتك بسهولة،
              والحصول على فواتير شفافة وواضحة في أي وقت
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button
                className="btn btn-primary"
                onClick={() => openModal("subscribe")}
              >
                اشترك الآن
              </button>
              <button
                className="btn btn-secondary2"
                onClick={() => openModal("login")}
              >
                تسجيل الدخول
              </button>
            </div>
          </div>

          <div className="hero-image">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="#f7c948" opacity="0.25" />
              <circle cx="100" cy="100" r="65" fill="#905f00" />
              <path
                d="M110 30 L70 110 H100 L90 170 L140 90 H110 Z"
                fill="#FFFFFF"
                stroke="#ff0000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

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

export default Hero;
