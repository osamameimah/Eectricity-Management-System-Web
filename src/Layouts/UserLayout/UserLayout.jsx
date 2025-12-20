 import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LogOut,
  Home,
  BarChart3,
  Wallet,
  AlertCircle,
  Menu,
} from "lucide-react";
import styles from "./UserLayout.module.css";

const UserLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.dashboardContainer} dir="rtl">
      {/* زر القائمة للموبايل */}
      <button
        className={styles.menuBtn}
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu size={22} />
      </button>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        <h2 className={styles.sidebarTitle}>
          لوحة تحكم / أسامة ميمة
        </h2>

        <nav className={styles.navButtons}>
          <NavLink
            to="/dashboard/user"
            end
            className={({ isActive }) =>
              `${styles.navBtn} ${
                isActive ? styles.activeTab : ""
              }`
            }
          >
            <Home size={20} />
            <span>الرئيسية</span>
          </NavLink>

          <NavLink
            to="/dashboard/user/readings"
            className={({ isActive }) =>
              `${styles.navBtn} ${
                isActive ? styles.activeTab : ""
              }`
            }
          >
            <BarChart3 size={20} />
            <span>القراءات</span>
          </NavLink>

          <NavLink
            to="/dashboard/user/wallet"
            className={({ isActive }) =>
              `${styles.navBtn} ${
                isActive ? styles.activeTab : ""
              }`
            }
          >
            <Wallet size={20} />
            <span>المحفظة</span>
          </NavLink>

          <NavLink
            to="/dashboard/user/issues"
            className={({ isActive }) =>
              `${styles.navBtn} ${
                isActive ? styles.activeTab : ""
              }`
            }
          >
            <AlertCircle size={20} />
            <span>الإبلاغ عن عطل</span>
          </NavLink>
        </nav>

        <button
          className={styles.logoutButton}
          onClick={() => navigate("/")}
        >
          <LogOut size={20} />
          <span>تسجيل الخروج</span>
        </button>
      </aside>

      {/* المحتوى */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
