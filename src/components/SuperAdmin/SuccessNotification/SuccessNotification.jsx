import React, { useEffect, useState } from "react";
import styles from "./SuccessNotification.module.css";

const SuccessNotification = ({ message, type = "success" }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <div className={styles.content}>
        <span className={styles.icon}>
          {type === "success" ? "✓" : "!"}
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessNotification;