 import styles from "./DashboardHome.module.css";
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardHome = () => {

    const pageTitles = {
        home: "الرئيسية",

    };



    const [activeTab, setActiveTab] = useState('home');
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
 
                <div className={styles.homeGrid}>
                    <div className={styles.infoCard}><span>الاسم</span><strong>{userData.name}</strong></div>
                    <div className={styles.infoCard}><span>رقم الجوال</span><strong>{userData.phone}</strong></div>
                    <div className={styles.infoCard}><span>رقم الهوية</span><strong>{userData.id}</strong></div>
                    <div className={styles.infoCard}><span>العنوان</span><strong>{userData.address}</strong></div>
                    <div className={styles.infoCard}><span>تاريخ الاشتراك</span><strong>{userData.subscriptionDate}</strong></div>
                    <div className={styles.infoCard}><span>رقم الاشتراك</span><strong>{userData.subscriptionNum}</strong></div>
                    <div className={styles.infoCard}><span>رقم الطبلون</span><strong>{userData.TablonNumber}</strong></div>
                    <div className={styles.infoCard}><span>سعر الكيلو</span><strong>{userData.currentPrice} ₪</strong></div>
                    <div className={styles.infoCard}><span>الحد الأدنى للفاتورة</span><strong>{userData.minBill} ₪</strong></div>
                </div>

                <div className={styles.chartCard}>
                    <h3>مخطط الاستهلاك الشهري</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={userData.readings}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="consumption" stroke="#905f00" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>


        </div>






    </>;
};
export default DashboardHome;
