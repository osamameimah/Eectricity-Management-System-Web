 import React, { useState } from "react";
import styles from "./IssueForm.module.css";
import { AlertCircle } from "lucide-react";

const IssueForm = ({ onSuccess }) => {
  const [data, setData] = useState({
    pumper: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const userData = {
    name: "أسامة ميمة",
    phone: "0599603312",
    address: "غزة - النصر",
  };

  const validate = () => {
    const newErrors = {};

    if (!data.pumper.trim()) {
      newErrors.pumper = "رقم الطبالون مطلوب";
    }

    if (data.details.trim().length < 10) {
      newErrors.details = "يرجى كتابة تفاصيل أوضح (10 أحرف على الأقل)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSuccess();
    setData({ pumper: "", details: "" });
  };

  return (
    <div className={styles.issueWrapper}>
      <div className={styles.issueHeader}>
        <AlertCircle size={28} />
        <div>
          <h3>نموذج الإبلاغ عن عطل</h3>
          <p>يرجى تعبئة البيانات بدقة</p>
        </div>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label>اسم المشترك</label>
          <input value={userData.name} disabled />
        </div>

        <div className={styles.inputGroup}>
          <label>رقم الجوال</label>
          <input value={userData.phone} disabled />
        </div>

        <div className={styles.inputGroup}>
          <label>رقم الطبالون</label>
          <input
            value={data.pumper}
            onChange={(e) =>
              setData({ ...data, pumper: e.target.value })
            }
          />
          {errors.pumper && <span className={styles.error}>{errors.pumper}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label>العنوان</label>
          <input value={userData.address} disabled />
        </div>

        <div className={`${styles.inputGroup} ${styles.full}`}>
          <label>تفاصيل العطل</label>
          <textarea
            value={data.details}
            onChange={(e) =>
              setData({ ...data, details: e.target.value })
            }
          />
          {errors.details && <span className={styles.error}>{errors.details}</span>}
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={handleSubmit}>إرسال البلاغ</button>
      </div>
    </div>
  );
};

export default IssueForm;
