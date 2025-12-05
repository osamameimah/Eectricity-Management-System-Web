import { useState } from "react";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال طلبك وسيتم التواصل قريبًا.");
    e.target.reset();
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>لوحة التحكم</h2>
        <ul className="menu">
          <li
            className={activePage === "home" ? "active" : ""}
            onClick={() => handleMenuClick("home")}
          >
            الرئيسية
          </li>
          <li
            className={activePage === "readings" ? "active" : ""}
            onClick={() => handleMenuClick("readings")}
          >
            القراءات
          </li>
          <li
            className={activePage === "wallet" ? "active" : ""}
            onClick={() => handleMenuClick("wallet")}
          >
            المحفظة
          </li>
          <li
            className={activePage === "report" ? "active" : ""}
            onClick={() => handleMenuClick("report")}
          >
            الإبلاغ عن عطل
          </li>
          <li
            className={activePage === "logout" ? "active" : ""}
            onClick={() => handleMenuClick("logout")}
          >
            تسجيل الخروج
          </li>
        </ul>
      </aside>

      <main className="content">
        {activePage === "home" && (
          <section className="page">
            <h1>الرئيسية</h1>
            <p>مرحبًا بك في لوحة التحكم الخاصة بك.</p>
          </section>
        )}

        {activePage === "readings" && (
          <section className="page">
            <h1>القراءات</h1>
            <p>عرض القراءات السابقة والحالية وحساب الاستهلاك.</p>
          </section>
        )}

        {activePage === "wallet" && (
          <section className="page">
            <h1>المحفظة</h1>
            <p>عرض الفواتير، حالة الدفع، وإجمالي المستحقات.</p>
          </section>
        )}

        {activePage === "report" && (
          <section className="page">
            <h1>الإبلاغ عن عطل</h1>
            <form className="report-form" onSubmit={handleSubmit}>
              <label>الاسم:</label>
              <input type="text" placeholder="أدخل اسمك" required />
              <label>رقم الطبالون:</label>
              <input type="text" placeholder="أدخل رقم الطبالون" required />
              <label>العطل:</label>
              <textarea placeholder="صف المشكلة هنا" required></textarea>
              <label>العنوان:</label>
              <input type="text" placeholder="أدخل العنوان" required />
              <label>رقم الجوال:</label>
              <input type="tel" placeholder="05xxxxxxx" required />
              <button type="submit">إرسال</button>
            </form>
          </section>
        )}

        {activePage === "logout" && (
          <section className="page">
            <h1>تسجيل الخروج</h1>
            <p>تم تسجيل الخروج بنجاح.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
