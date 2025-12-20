import React, { useState } from "react";

import styles from "./DashboardWallet.module.css";
import WalletSummary from "../../../components/User/Wallet/WalletSummary/WalletSummary";
import WalletCard from "../../../components/User/Wallet/WalletCard/WalletCard";
import WalletTable from "../../../components/User/Wallet/WalletTable/WalletTable";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const DashboardWallet = () => {

  const activeTab = "المحفظة";

  const userData = {
    currentPrice: 15,
    wallet: {
      totalBills: 510,
      initialFee: 50,
      initialReading: 5520,
      paidBills: 340,
      unpaidBills: 170,
    },
    readings: [
      { month: "يناير", date: "12-01-2025", previous: 1000, current: 1150, consumption: 150 },
      { month: "فبراير", date: "12-01-2025", previous: 1150, current: 1320, consumption: 170 },
      { month: "مارس", date: "12-01-2025", previous: 1320, current: 1480, consumption: 160 },
    ],
  };

  return (
    <div className={styles.mainContent}>

      <Breadcrumb title={activeTab} />

      <WalletSummary totalBills={userData.wallet.totalBills} />

      <div className={styles.walletGrid}>
        <WalletCard icon="💡" title="رسوم الاشتراك الأولية" subtitle="تدفع لمرة واحدة فقط" value={`${userData.wallet.initialFee} ₪`} />
        <WalletCard icon="⏳" title="قراءة الساعة الأولية" value={`KILO ${userData.wallet.initialReading}`} />
        <WalletCard icon="✅" title="الفواتير المدفوعة" value={`${userData.wallet.paidBills} ₪`} />
        <WalletCard icon="⏳" title="الفواتير غير المدفوعة" value={`${userData.wallet.unpaidBills} ₪`} />
      </div>

      <WalletTable readings={userData.readings} currentPrice={userData.currentPrice} />
    </div>
  );
};

export default DashboardWallet;
