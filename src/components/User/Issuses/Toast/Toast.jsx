import React from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, onClose }) => {
  return (
    <div className={styles.alert}>
      <span>{message}</span>
      <button onClick={onClose}>✕</button>
    </div>
  );
};

export default Toast;
