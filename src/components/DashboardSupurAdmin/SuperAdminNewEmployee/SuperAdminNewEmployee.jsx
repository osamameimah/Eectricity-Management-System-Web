
import { useState } from "react";
import styles from "./SuperAdminNewEmployee.module.css";

const SuperAdminNewEmployee = ()=>{
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات المدير:", formData);
    // لاحقًا: API request
  };

    const [activeTab, setActiveTab] = useState("kilo");
  
    const pageTitles = {
      home: "الرئيسية",
      readings: "القراءات",
      wallet: "المحفظة",
      kilo: "إضافة مدير جديد"
    };

  return (
    <>
    <div className={styles.page} dir="rtl">
             <div className={styles.breadcrumb}>
                لوحة التحكم / {pageTitles[activeTab]}
              </div>
      {/* <h1 className={styles.title}>إضافة مدير جديد</h1> */}

      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>الاسم الكامل</label>
          <input
            type="text"
            name="fullName"
            placeholder="أدخل الاسم الكامل"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>رقم الجوال</label>
          <input
            type="tel"
            name="phone"
            placeholder="مثال: 059xxxxxxx"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>كلمة المرور</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>الصلاحية</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="admin">مدير</option>
            <option value="super_admin">مدير عام</option>
          </select>
        </div>

        <button className={styles.submitBtn}>
          إضافة المدير
        </button>
      </form>
    </div>
    </>
  );
};

export default SuperAdminNewEmployee;


  

 
