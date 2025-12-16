import React, { useState } from 'react';
import { User, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import styles from "./RegisterModal.module.css";

// NewSubscriber
export default function RegisterModal() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    id: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'اسم المشترك مطلوب';
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب';
    if (!formData.id.trim()) newErrors.id = 'رقم الهوية مطلوب';
    else if (!/^\d{10,}$/.test(formData.id)) newErrors.id = 'رقم الهوية يجب أن يكون أرقام فقط (10 أرقام على الأقل)';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الجوال مطلوب';
    else if (!/^05\d{8}$/.test(formData.phone)) newErrors.phone = 'رقم الجوال يجب أن يكون بصيغة صحيحة (05XXXXXXXX)';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('بيانات المشترك الجديد:', formData);
      setTimeout(() => {
        setFormData({ name: '', address: '', id: '', phone: '' });
        setSubmitted(false);
      }, 2000);
    } else setErrors(newErrors);
  };

  const handleReset = () => {
    setFormData({ name: '', address: '', id: '', phone: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className={styles.formPage} dir="rtl">
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1>تسجيل مشترك جديد</h1>
          {/* <p>أدخل بيانات المشترك الجديد في النموذج أدناه</p> */}
        </div>

        {submitted && (
          <div className={styles.successMessage}>
            <CheckCircle size={24} />
            <div>
              <p>تم التسجيل بنجاح! ✓</p>
              <p>تم تسجيل المشترك الجديد في النظام</p>
            </div>
          </div>
        )}

        <div className={styles.formBox}>
          <div className={styles.formGroup}>
            <label>
              <User size={20} /> اسم المشترك
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="أدخل الاسم الكامل"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && (
              <p className={styles.errorText}>
                <AlertCircle size={16} /> {errors.name}
              </p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>
              🆔 رقم الهوية
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="أدخل رقم الهوية (أرقام فقط)"
              className={errors.id ? 'input-error' : ''}
            />
            {errors.id && (
              <p className={styles.errorText}>
                <AlertCircle size={16} /> {errors.id}
              </p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>
              <MapPin size={20} /> العنوان
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="أدخل العنوان (المدينة - الحي)"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && (
              <p className={styles.errorText}>
                <AlertCircle size={16} /> {errors.address}
              </p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>
              <Phone size={20} /> رقم الجوال
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="أدخل رقم الجوال (05XXXXXXXX)"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && (
              <p className={styles.styles.errorText}>
                <AlertCircle size={16} /> {errors.phone}
              </p>
            )}
          </div>

          {formData.name || formData.address || formData.id || formData.phone ? (
            <div className={styles.summaryBox}>
              <p>ملخص البيانات:</p>
              {formData.name && <p>👤 الاسم: {formData.name}</p>}
              {formData.id && <p>🆔 الهوية: {formData.id}</p>}
              {formData.address && <p>📍 العنوان: {formData.address}</p>}
              {formData.phone && <p>📱 الجوال: {formData.phone}</p>}
            </div>
          ) : null}

          <div className={styles.formButtons}>
            <button onClick={handleSubmit}>✓ تسجيل المشترك</button>
            {/* <button onClick={handleReset}>✕ إعادة تعيين</button> */}
          </div>
        </div>

    
      </div>
    </div>
  );
}
