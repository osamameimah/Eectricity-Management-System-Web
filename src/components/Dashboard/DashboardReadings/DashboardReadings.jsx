// import styles from "./Dashboard.module.css";
import React, { useState } from 'react';
 import styles from "./DashboardReadings.module.css"

const DashboardReadings = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedReading, setSelectedReading] = useState(null);

  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    issues: "الإبلاغ عن عطل",
  };



  const [activeTab, setActiveTab] = useState('readings');
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


  return <>
    <div className={styles.mainContent}>
      <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles[activeTab]}
      </div>

      <div className={styles.tabContent}>
         <table className={styles.table}>
          <thead>
            <tr>
              <th>الشهر</th>
              <th>التاريخ</th>
              <th>القراءة السابقة</th>
              <th>القراءة الحالية</th>
              <th>الاستهلاك (ك.و)</th>
              <th>التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {userData.readings.map((r, i) => (
              <tr key={i}>
                <td>{r.month}</td>
                <td>{r.date}</td>
                <td>{r.previous}</td>
                <td>{r.current}</td>
                <td className={styles.consumption}>{r.consumption}</td>
                <td>
                  <button
                    className={styles.detailsBtn}
                    onClick={() => {
                      setSelectedReading(r);
                      setShowModal(true);
                    }}
                  >
                    عرض التفاصيل
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


            {showModal && selectedReading && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalBox}>
                  <h2>تفاصيل قراءة شهر {selectedReading.month}</h2>
    
                  <table className={styles.modalTable}>
                    <thead>
                      <tr>
                        <th>الأسبوع</th>
                        <th>القراءة السابقة</th>
                        <th>القراءة الحالية</th>
                        <th>الإستهلاك</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4].map((week) => {
                        const prev = selectedReading.previous + (week - 1) * 40;
                        const curr = prev + 40;
    
                        return (
                          <tr key={week}>
                            <td>الأسبوع {week}</td>
                            <td>{prev}</td>
                            <td>{curr}</td>
                            <td className={styles.consumption}>{curr - prev}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
    
                  <button
                    className={styles.closeBtn}
                    onClick={() => setShowModal(false)}
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            )}
  </>;
};
export default DashboardReadings;
