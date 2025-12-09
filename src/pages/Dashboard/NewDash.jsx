import React, { useState } from 'react';
import { LogOut, Home, BarChart3, Wallet, AlertCircle, Users, Settings, FileText, Wrench } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

import styles from "./Dashboard.module.css";

import { useNavigate } from 'react-router-dom';


const NewDash = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedReading, setSelectedReading] = useState(null);


    const handleIssueSubmit = () => {
        if (issueData.details) {
            alert('تم إرسال الإبلاغ بنجاح! سيتم إرسال الدعم الفني قريبًا.');
            setIssueData({ details: '', pumper: '' });
        }
    };
    const [activeTab, setActiveTab] = useState('home');
    const [issueData, setIssueData] = useState({ details: '', pumper: '' });
    const navigate = useNavigate();
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
    return (

        <>
            <div className={styles.dashboardContainer} dir="rtl">
                <div className={`${styles.sidebar} ${styles.userSidebar}`}>

                    <h2>المشترك</h2>
                    <nav className={styles.navButtons}>
                        {[
                            { id: 'home', label: 'الرئيسية', icon: Home },
                            { id: 'readings', label: 'القراءات', icon: BarChart3 },
                            { id: 'wallet', label: 'المحفظة', icon: Wallet },
                            { id: 'issues', label: 'الإبلاغ عن عطل', icon: AlertCircle },
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={activeTab === item.id ? 'activeTab' : ''}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </button>
                        ))}
                    </nav>
                    <button className={styles.logoutButton} onClick={() => navigate("/")} >
                        <LogOut size={20} /> تسجيل الخروج
                    </button>
                </div>

                <div className={styles.mainContent}>
                    {activeTab === 'home' && (
                        <div className={styles.tabContent}>
                            <h1 className={styles.pageTitle}>لوحة المشترك</h1>

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
                    )}

                    {activeTab === 'readings' && (
                        <div className={styles.tabContent}>
                            <h1 className={styles.pageTitle}>سجل القراءات</h1>

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
                    )}


                    {activeTab === 'wallet' && (
                        <div className={styles.tabContent}>
                            <h1>المحفظة المالية</h1>

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
                    )}


 {activeTab === 'issues' && (
  <div className={styles.tabContent}>
    <h1 className={styles.pageTitle}>الإبلاغ عن عطل فني</h1>

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
          <input type="text" value={userData.name} readOnly />
        </div>

        <div className={styles.inputGroup}>
          <label>رقم الجوال</label>
          <input type="text" value={userData.phone} readOnly />
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
)}



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



            </div>
        </>
    );

}

export default NewDash;