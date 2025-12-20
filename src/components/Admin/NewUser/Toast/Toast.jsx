import React from "react";
import styles from "./Toast.module.css";

const Toast = ({ show, msg, type }) => {
  if (!show) return null;

  return (
    <div className={`${styles.toast} ${type === "approve" ? styles.toastSuccess : styles.toastError}`}>
      {msg}
    </div>
  );
};

export default Toast;
