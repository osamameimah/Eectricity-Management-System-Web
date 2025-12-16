 import styles from "./AdminHome.module.css";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Users, Wallet, AlertTriangle, FileWarning, UserPlus, Zap } from "lucide-react";

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
      <div className={styles.breadcrumb}>لوحة التحكم / {pageTitles.home}</div>

      {/* بطاقات الإحصائيات */}
      <div className={styles.homeGrid}>
        {stats.map((item, index) => (
          <div key={index} className={styles.infoCard}>
            <span>{item.title}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      {/* مخطط الفواتير */}
      <div className={styles.chartCard}>
        <h3>إحصائية الفواتير للأشهر الأخيرة</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bills" fill="#905f00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;
