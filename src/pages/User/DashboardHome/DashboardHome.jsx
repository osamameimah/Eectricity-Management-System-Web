 import React, { useState } from "react";
import styles from "./DashboardHome.module.css";
import InfoCard from "../../../components/User/Home/InfoCard";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const DashboardHome = () => {
    const userData = {
        name: "أسامة ميمة",
        phone: "0599603312",
        id: "1234567890",
        address: "غزة - النصر",
        subscriptionDate: "2023-06-15",
        TablonNumber: "15",
        currentPrice: "15",
        minBill: 50,
    };

    const infoItems = [
        { label: "الاسم", value: userData.name },
        { label: "رقم الجوال", value: userData.phone },
        { label: "رقم الهوية", value: userData.id },
        { label: "العنوان", value: userData.address },
        { label: "تاريخ الاشتراك", value: userData.subscriptionDate },
        { label: "رقم الطبلون", value: userData.TablonNumber },
        { label: "سعر الكيلو", value: `${userData.currentPrice} ₪` },
        { label: "الحد الأدنى للفاتورة", value: `${userData.minBill} ₪` },
    ];

     const activeTab =   "الرئيسية";

    return (
        <div className={styles.mainContent}>
             <Breadcrumb title={activeTab} />


            <div className={styles.tabContent}>
                <div className={styles.homeGrid}>
                    {infoItems.map((item, index) => (
                        <InfoCard key={index} label={item.label} value={item.value} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;


                {/* <div className={styles.chartCard}>
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
                </div> */}
             