import React, { useState } from 'react';
import { LogOut, Home, BarChart3, Wallet, AlertCircle, Users, Settings, FileText, Wrench } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
// import './Dashboard.css';
import "../../../src/Dashboard.css";

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });
  const [activeTab, setActiveTab] = useState('home');
  const [issueData, setIssueData] = useState({ details: '', pumper: '' });

  const userData = {
    name: 'أحمد محمد',
    phone: '0599123456',
    id: '1234567890',
    address: 'نابلس - حي النزال',
    subscriptionDate: '2023-06-15',
    pumperName: 'محمود الطرفي',
    currentPrice: 15,
    minBill: 50,
    subscriptionNum: 'SUB001',
    readings: [
      { month: 'يناير', previous: 1000, current: 1150, consumption: 150 },
      { month: 'فبراير', previous: 1150, current: 1320, consumption: 170 },
      { month: 'مارس', previous: 1320, current: 1480, consumption: 160 },
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

  const handleLogin = (role) => {
    if (loginData.identifier && loginData.password) {
      setCurrentUser(role);
      setLoginData({ identifier: '', password: '' });
      setActiveTab('home');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('home');
  };

  const handleIssueSubmit = () => {
    if (issueData.details) {
      alert('تم إرسال الإبلاغ بنجاح! سيتم إرسال الدعم الفني قريبًا.');
      setIssueData({ details: '', pumper: '' });
    }
  };

  // ---------- صفحة تسجيل الدخول ----------
  if (!currentUser) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">تسجيل الدخول</h1>  
          <div className="login-inputs">
            <input
              type="text"
              placeholder="رقم الجوال أو الهوية أو رقم الاشتراك"
              value={loginData.identifier}
              onChange={(e) => setLoginData({...loginData, identifier: e.target.value})}
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            />
          </div>
          <div className="login-buttons">
            <button onClick={() => handleLogin('user')}>دخول كمشترك</button>
            <button onClick={() => handleLogin('admin')}>دخول كمدير</button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- لوحة تحكم المشترك ----------
  if (currentUser === 'user') {
    return (
      <div className="dashboard-container" dir="rtl">
        <div className="sidebar user-sidebar">
          <h2>المشترك</h2>
          <nav className="nav-buttons">
            {[
              { id: 'home', label: 'الرئيسية', icon: Home },
              { id: 'readings', label: 'القراءات', icon: BarChart3 },
              { id: 'wallet', label: 'المحفظة', icon: Wallet },
              { id: 'issues', label: 'الإبلاغ عن عطل', icon: AlertCircle },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={activeTab === item.id ? 'active-tab' : ''}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={20} /> تسجيل الخروج
          </button>
        </div>

        <div className="main-content">
          {activeTab === 'home' && (
            <div className="tab-content">
              <h1>الرئيسية</h1>
              <div className="grid-2">
                <div className="card"><p>الاسم</p><p>{userData.name}</p></div>
                <div className="card"><p>رقم الجوال</p><p>{userData.phone}</p></div>
                <div className="card"><p>العنوان</p><p>{userData.address}</p></div>
                <div className="card"><p>سعر الكيلو</p><p>{userData.currentPrice} شيكل</p></div>
              </div>
              <div className="chart-card">
                <h3>الاستهلاك الشهري</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userData.readings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="consumption" stroke="#16a34a" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'readings' && (
            <div className="tab-content">
              <h1>القراءات</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>الشهر</th>
                    <th>القراءة السابقة</th>
                    <th>القراءة الحالية</th>
                    <th>الاستهلاك</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.readings.map((r, i) => (
                    <tr key={i}>
                      <td>{r.month}</td>
                      <td>{r.previous}</td>
                      <td>{r.current}</td>
                      <td className="consumption">{r.consumption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'wallet' && (
            <div className="tab-content">
              <h1>المحفظة</h1>
              <div className="grid-2">
                <div className="card"><p>الفاتورة الشهرية</p><p>{userData.wallet.monthlyBill} شيكل</p></div>
                <div className="card"><p>الفواتير المدفوعة</p><p>{userData.wallet.paidBills} شيكل</p></div>
                <div className="card"><p>الفواتير غير المدفوعة</p><p>{userData.wallet.unpaidBills} شيكل</p></div>
                <div className="card"><p>الإجمالي</p><p>{userData.wallet.totalBills} شيكل</p></div>
              </div>
              <button className="action-btn">الدفع الآن</button>
            </div>
          )}

          {activeTab === 'issues' && (
            <div className="tab-content">
              <h1>الإبلاغ عن عطل</h1>
              <div className="form-card">
                <label>اسم المشترك</label>
                <input type="text" value={userData.name} readOnly />
                <label>رقم الطبالون</label>
                <input type="text" placeholder="أدخل رقم الطبالون" value={issueData.pumper} onChange={(e) => setIssueData({...issueData, pumper: e.target.value})} />
                <label>تفاصيل العطل</label>
                <textarea placeholder="أدخل تفاصيل العطل" value={issueData.details} onChange={(e) => setIssueData({...issueData, details: e.target.value})}></textarea>
                <label>العنوان</label>
                <input type="text" value={userData.address} readOnly />
                <label>رقم الجوال</label>
                <input type="text" value={userData.phone} readOnly />
                <button className="action-btn" onClick={handleIssueSubmit}>إرسال الإبلاغ</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------- لوحة تحكم المدير ----------
  if (currentUser === 'admin') {
    return (
      <div className="dashboard-container" dir="rtl">
        <div className="sidebar admin-sidebar">
          <h2>الإدارة</h2>
          <nav className="nav-buttons">
            {[
              { id: 'home', label: 'الرئيسية', icon: Home },
              { id: 'new-subscribers', label: 'المشتركين الجدد', icon: Users },
              { id: 'price', label: 'سعر الكيلو', icon: Settings },
              { id: 'issues', label: 'تقارير الأعطال', icon: AlertCircle },
              { id: 'subscribers', label: 'أسماء المشتركين', icon: Users },
              { id: 'readings', label: 'القراءات', icon: BarChart3 },
              { id: 'staff', label: 'موظفي الدعم', icon: Wrench },
              { id: 'bills', label: 'الفواتير', icon: FileText },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={activeTab === item.id ? 'active-tab' : ''}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={20} /> تسجيل الخروج
          </button>
        </div>

        <div className="main-content">
          {/* يمكنك إضافة tabs للمدير بنفس الطريقة كما للمشترك */}
          <h1>محتوى المدير هنا</h1>
        </div>
      </div>
    );
  }
}
