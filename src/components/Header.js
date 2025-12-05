import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <div className="logo-icon">⚡</div>
            <span>شركة كهرباء غزة</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="contact">اتصل بنا</a>
            </li>
            <li>
              <a href="payment">طرق الدفع</a>
            </li>
            <li>
              <a href="services">خدماتنا</a>
            </li>
            <li>
              <a href="about">من نحن</a>
            </li>
            <li>
              {/* <Link to="home">الرئيسية</Link> */}
              <a href="home">الرئيسية</a>
            </li>
          </ul>
          <div className="nav-buttons">
            <a href="login" className="btn btn-secondary1">
              تسجيل دخول
            </a>
            <a href="register" className="btn btn-primary">
              اشتراك جديد
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
