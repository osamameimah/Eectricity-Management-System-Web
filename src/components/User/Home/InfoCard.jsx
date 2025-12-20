 import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ label, value }) => {
  return (
    <div className={styles.infoCard}>
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>{value}</strong>
    </div>
  );
};

export default InfoCard;
