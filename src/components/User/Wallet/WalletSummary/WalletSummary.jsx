import React from "react";
import styles from "./WalletSummary.module.css";

const WalletSummary = ({ totalBills }) => {
  return (
    <div className={styles.walletSummary}>
      <div>
        <p>إجمالي المستحقات</p>
        <h2>{totalBills} ₪</h2>
      </div>
    </div>
  );
};

export default WalletSummary;
