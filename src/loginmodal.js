import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Loginmodal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true); // عند الضغط على الزر يظهر المودال
  };

  const closeModal = () => {
    setModalIsOpen(false); // لإغلاق المودال
  };

  return (
    <div>
      <h1>مثال على المودال</h1>
      <button onClick={openModal} style={{ padding: '10px 20px', fontSize: '16px' }}>
        فتح المودال
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="مثال المودال"
        style={{
          overlay: { backgroundColor: 'rgba(0,0,0,0.5)' },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '2rem',
            borderRadius: '10px',
            maxWidth: '400px',
            width: '90%',
          }
        }}
      >
        <h2>مرحبا!</h2>
        <p>المودال ظاهر الآن فوق الصفحة.</p>
        <button onClick={closeModal} style={{ marginTop: '10px', padding: '5px 10px' }}>
          إغلاق
        </button>
      </Modal>
    </div>
  );
}
