const Footer = ()=>{
return(
    <>
         <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li>
                <a href="#home">الرئيسية</a>
              </li>
              <li>
                <a href="#about">من نحن</a>
              </li>
              <li>
                <a href="#services">خدماتنا</a>
              </li>
              <li>
                <a href="#contact">اتصل بنا</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>الخدمات</h3>
            <ul>
              <li>
                <a href="#">إدارة القراءات</a>
              </li>
              <li>
                <a href="#">الفواتير</a>
              </li>
              <li>
                <a href="#">المحفظة</a>
              </li>
              <li>
                <a href="#">الدعم الفني</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>معلومات قانونية</h3>
            <ul>
              <li>
                <a href="#">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="#">شروط الاستخدام</a>
              </li>
              <li>
                <a href="#">سياسة الاسترجاع</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <ul>
              <li>📞 +970-59-xxx-xxxx</li>
              <li>📧 info@electric.ps</li>
              <li>📍 نابلس، فلسطين</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 شركة الكهرباء. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    
    </>
)


}

export default Footer;