 import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LogOut,
  UserPlus,
  Users,
  Settings,
  FileText,
  Menu,
} from "lucide-react";
import styles from "./SuperAdminLayout.module.css";

const SuperAdminLayout = () => {
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
            to="/dashboard/superadmin/new-admin"
            className={({ isActive }) =>
              `${styles.navBtn} ${
                isActive ? styles.activeTab : ""
              }`
            }
          >
            <UserPlus size={20} />
            <span>إضافة مدير</span>
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

export default SuperAdminLayout;
