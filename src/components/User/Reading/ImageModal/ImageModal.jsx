import React from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => (
  <div className={styles.imageOverlay} onClick={onClose}>
    <div className={styles.imageBox} onClick={(e) => e.stopPropagation()}>
      <img src={image} alt="تكبير الصورة" />
      <button className={styles.closeImageBtn} onClick={onClose}>✕</button>
    </div>
  </div>
);

export default ImageModal;
