const Services = ()=>{
return(
    <>
          <section className="services" id="services">
        <div className="services-container">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            خدماتنا
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            نوفر لك كل ما تحتاجه لإدارة اشتراكك بسهولة
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>إدارة القراءات</h3>
              <p>متابعة القراءة الشهرية بدقة ووضوح تام</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3>الفواتير الذكية</h3>
              <p>حساب تلقائي للاستهلاك وسعر الكيلو</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>المحفظة الإلكترونية</h3>
              <p>متابعة المدفوعات والمبالغ المتبقية</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>إبلاغ عن عطل</h3>
              <p>إرسال البلاغات ومتابعتها مع فريق الصيانة</p>
            </div>
          </div>
        </div>
      </section>
    
    </>
)

}


export default Services;