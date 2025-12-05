const About = ()=>{
return(
    <>
          <section className="about" id="about">
        <div className="about-container">
          <h2 className="section-title">من نحن</h2>
          <p className="section-subtitle">
            شركة رائدة في مجال توفير الطاقة الكهربائية بخدمات موثوقة ومتطورة
          </p>
          <div className="about-content">
            <div className="about-card">
              <div className="about-icon">🏢</div>
              <h3>تأسست عام 2015</h3>
              <p>خبرة تمتد لأكثر من 8 سنوات في خدمة المواطنين</p>
            </div>
            <div className="about-card">
              <div className="about-icon">⚡</div>
              <h3>طاقة مستدامة</h3>
              <p>نسعى لتوفير كهرباء نظيفة ومستدامة لجميع المشتركين</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🛡️</div>
              <h3>موثوقية عالية</h3>
              <p>نضمن استمرارية الخدمة مع أعلى معايير الجودة</p>
            </div>
          </div>
        </div>
      </section>
    
    </>
)


}

export default About;