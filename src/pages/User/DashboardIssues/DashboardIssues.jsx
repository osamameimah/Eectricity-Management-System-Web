// import styles from "./Dashboard.module.css";
import styles from "./DashboardIssues.module.css"
import React, { useState } from 'react';
import { LogOut, Home, BarChart3, Wallet, AlertCircle, Users, Settings, FileText, Wrench } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

import { useNavigate } from 'react-router-dom';
const DashboardIssues = () => {


  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    issues: "الإبلاغ عن عطل",
  };



  const handleIssueSubmit = () => {
    if (issueData.details) {
      alert('تم إرسال الإبلاغ بنجاح! سيتم إرسال الدعم الفني قريبًا.');
      setIssueData({ details: '', pumper: '' });
    }
  };
  const [activeTab, setActiveTab] = useState('issues');
  const [issueData, setIssueData] = useState({ details: '', pumper: '' });
  const userData = {
    name: "أسامة ميمة",
    phone: '0599603312',
    id: '1234567890',
    address: 'غزة - النصر ',
    subscriptionDate: '2023-06-15',
    TablonNumber: '15',
    currentPrice: '15',
    minBill: 50,
    subscriptionNum: 'SUB001',
    readings: [
      { month: 'يناير', date: '12-01-2025', previous: 1000, current: 1150, consumption: 150 },
      { month: 'فبراير', date: '12-01-2025', previous: 1150, current: 1320, consumption: 170 },
      { month: 'مارس', date: '12-01-2025', previous: 1320, current: 1480, consumption: 160 },
    ],
    wallet: {
      initialFee: 50,
      monthlyBill: 170,
      paidBills: 340,
      unpaidBills: 170,
      totalBills: 510
    }
  };

  const adminData = {
    currentPrice: 15,
    totalBills: 15000,
    totalSubscribers: 250,
    openIssues: 8,
    unpaidBills: 2500,
    newPending: 5,
    bills: [
      { month: 'يناير', paid: 5000, unpaid: 500 },
      { month: 'فبراير', paid: 4800, unpaid: 600 },
      { month: 'مارس', paid: 5200, unpaid: 400 },
    ]
  };
  return <>
    <div className={styles.mainContent}>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>
      <div className={styles.tabContent}>

        <div className={styles.issueWrapper}>

          <div className={styles.issueHeader}>
            <AlertCircle size={28} />
            <div>
              <h3>نموذج الإبلاغ عن عطل</h3>
              <p>يرجى تعبئة البيانات بدقة لضمان سرعة المعالجة</p>
            </div>
          </div>

          <div className={styles.issueFormGrid}>

            <div className={styles.inputGroup}>
              <label>اسم المشترك</label>
              <input type="text" value={userData.name} />
            </div>

            <div className={styles.inputGroup}>
              <label>رقم الجوال</label>
              <input type="text" value={userData.phone} />
            </div>

            <div className={styles.inputGroup}>
              <label>رقم الطبالون</label>
              <input
                type="text"
                placeholder="أدخل رقم الطبالون"
                value={issueData.pumper}
                onChange={(e) =>
                  setIssueData({ ...issueData, pumper: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label>العنوان</label>
              <input type="text" value={userData.address} readOnly />
            </div>

            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label>تفاصيل العطل</label>
              <textarea
                placeholder="يرجى كتابة تفاصيل العطل بدقة..."
                value={issueData.details}
                onChange={(e) =>
                  setIssueData({ ...issueData, details: e.target.value })
                }
              ></textarea>
            </div>

          </div>

          <div className={styles.issueActions}>
            <button className={styles.actionBtn} onClick={handleIssueSubmit}>
              إرسال البلاغ
            </button>
          </div>

        </div>
      </div>



    </div>






  </>;
};
export default DashboardIssues;
