import styles from "./DashboardWallet.module.css"


import React, { useState } from 'react';
import { LogOut, Home, BarChart3, Wallet, AlertCircle, Users, Settings, FileText, Wrench } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

import { useNavigate } from 'react-router-dom';
const DashboardWallet = () => {


    const pageTitles = {
        wallet: "المحفظة",
    };


    const [activeTab, setActiveTab] = useState('wallet');
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
                {/* <h1>المحفظة المالية</h1> */}

                {/* ملخص الرصيد */}
                <div className={styles.walletSummary}>
                    <div>
                        <p>إجمالي المستحقات</p>
                        <h2>{userData.wallet.totalBills} ₪</h2>
                    </div>
                    <button className={styles.payNowBtn}>دفع الآن</button>
                </div>

                {/* الكروت المالية */}
                <div className={styles.walletGrid}>
                    <div className={styles.walletCard}>
                        <span>💡</span>
                        <div>
                            <p>رسوم الاشتراك الأولية</p>
                            <h4>{userData.wallet.initialFee} ₪</h4>
                        </div>
                    </div>

                    <div className={styles.walletCard}>
                        <span>📅</span>
                        <div>
                            <p>فاتورة الشهر الحالي</p>
                            <h4>{userData.wallet.monthlyBill} ₪</h4>
                        </div>
                    </div>

                    <div className={styles.walletCard}>
                        <span>✅</span>
                        <div>
                            <p>الفواتير المدفوعة</p>
                            <h4>{userData.wallet.paidBills} ₪</h4>
                        </div>
                    </div>

                    <div className={styles.walletCard}>
                        <span>⏳</span>
                        <div>
                            <p>الفواتير غير المدفوعة</p>
                            <h4>{userData.wallet.unpaidBills} ₪</h4>
                        </div>
                    </div>
                </div>

                {/* جدول تفصيلي */}
                <div className={styles.walletTable}>
                    <h3>تفاصيل الفواتير</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>الشهر</th>
                                <th>قيمة الفاتورة</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.readings.map((bill, index) => (
                                <tr key={index}>
                                    <td>{bill.month}</td>
                                    <td>{bill.consumption * userData.currentPrice} ₪</td>
                                    <td className={styles.unpaid}>غير مدفوعة</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




        </div>






    </>;
};
export default DashboardWallet;
