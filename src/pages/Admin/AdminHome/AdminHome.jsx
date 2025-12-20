 import React from "react";
   import styles from "./AdminHome.module.css";
import { Users, Wallet, AlertTriangle, FileWarning, UserPlus, Zap } from "lucide-react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import StatsCard from "../../../components/Admin/Home/StatsCard/StatsCard";

const AdminHome = () => {
  const pageTitles = { home: "الرئيسية" };

  const stats = [
    { title: "سعر الكيلو الحالي", value: "3.5 شيكل", icon: <Zap size={24} /> },
    { title: "إجمالي فواتير المشتركين", value: "12,450 شيكل", icon: <Wallet size={24} /> },
    { title: "عدد المشتركين الكلي", value: "835", icon: <Users size={24} /> },
    { title: "عدد الأعطال المفتوحة", value: "12", icon: <AlertTriangle size={24} /> },
    { title: "الفواتير غير المدفوعة", value: "47", icon: <FileWarning size={24} /> },
    { title: "الفواتير المدفوعة", value: "5", icon: <FileWarning size={24} /> },
    { title: "المشتركين الجدد بانتظار الموافقة", value: "18", icon: <UserPlus size={24} /> },
  ];

  const monthlyData = [
    { month: "يناير", bills: 3200 },
    { month: "فبراير", bills: 4100 },
    { month: "مارس", bills: 3800 },
    { month: "أبريل", bills: 4500 },
  ];

  return (
    <div className={styles.mainContent}>
      <Breadcrumb page={pageTitles.home} />

      <div className={styles.homeGrid}>
        {stats.map((item, index) => (
          <StatsCard  key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>

      {/* Uncomment if you want to show chart */}
      {/* <ChartCard title="إحصائية الفواتير للأشهر الأخيرة" data={monthlyData} dataKey="bills" /> */}
    </div>
  );
};

export default AdminHome;
