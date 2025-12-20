import React from "react";
import styles from "./WalletCard.module.css";

const WalletCard = ({ icon, title, subtitle, value }) => {
  return (
    <div className={styles.walletCard}>
      <span>{icon}</span>
      <div>
        <p>{title}</p>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default WalletCard;
