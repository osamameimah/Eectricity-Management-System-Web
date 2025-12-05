const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>للشكاوي أو التواصل أو التبليغ عن عطل </h2>
          <div className="form-group">
            <label>الاسم</label>
            <input type="text" placeholder="أدخل اسمك الكامل" />
          </div>
          <div className="form-group">
            <label>رقم الجوال</label>
            <input type="tel" placeholder="05xxxxxxxx" />
          </div>
          <div className="form-group">
            <label>الرسالة</label>
            <textarea placeholder="اكتب رسالتك هنا..."></textarea>
          </div>
          <button className="submit-btn">إرسال</button>
        </div>
      </section>
    </>
  );
};

export default Contact;
