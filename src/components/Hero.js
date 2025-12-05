const Hero = ()=>{
return(
    <>
          <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>نظام إدارة المشتركين</h1>
            {/* <p>سهولة في المتابعة • دقة في الفواتير • خدمة مستمرة</p> */}
            <p>
              نظام متكامل يتيح لك متابعة استهلاكك بدقة، وإدارة اشتراكاتك بسهولة،
              والحصول على فواتير شفافة وواضحة في أي وقت
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <a href="#register" className="btn btn-primary">
                اشترك الآن
              </a>
              <a href="#login" className="btn btn-secondary2">
                تسجيل الدخول
              </a>
            </div>
          </div>
          {/* <div className="hero-image">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" fill="#ffd700" opacity="0.2" />
              <circle cx="250" cy="250" r="150" fill="#fff" opacity="0.9" />
              <path
                d="M250 150 L280 220 L350 220 L295 260 L320 330 L250 285 L180 330 L205 260 L150 220 L220 220 Z"
                fill="#667eea"
              />
              <circle cx="250" cy="250" r="40" fill="#764ba2" />
            </svg>
          </div> */}
          

          <div className="hero-image">
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    // style={{ maxWidth: "200px" }}
  >
    <circle cx="100" cy="100" r="90" fill="#f7c948" opacity="0.25" />

    <circle cx="100" cy="100" r="65" fill="#905f00" />

    <path
      d="M110 30 L70 110 H100 L90 170 L140 90 H110 Z"
      fill="#FFFFFF"
      stroke="#ff0000"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
</div>

        </div>
      </section>
    
    
    </>
)

}


export default Hero;