import React from "react";
import styles from "./StatsCard.module.css";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className={styles.infoCard}>
      <span>{title}</span>
      <strong>{value}</strong>
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};

export default StatsCard;
