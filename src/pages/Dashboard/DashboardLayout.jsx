import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LogOut,
  Home,
  BarChart3,
  Wallet,
  AlertCircle,
  Users,
  Settings,
  FileText,
  UserPlus,
} from "lucide-react";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboardContainer} dir="rtl">
      {/* ✅ Sidebar */}
      <aside className={`${styles.sidebar} ${styles.userSidebar}`}>
        <h2 className={styles.sidebarTitle}>لوحة التحكم</h2>

        <nav className={styles.navButtons}>
          {/* ✅ روابط المشترك */}
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Home size={20} /> الرئيسية
          </NavLink>

          <NavLink
            to="/dashboard/readings"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <BarChart3 size={20} /> القراءات
          </NavLink>

          <NavLink
            to="/dashboard/wallet"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Wallet size={20} /> المحفظة
          </NavLink>

          <NavLink
            to="/dashboard/issues"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <AlertCircle size={20} /> الإبلاغ عن عطل
          </NavLink>

          {/* ✅ فاصل */}
          <div className={styles.divider}></div>

          {/* ✅ روابط الأدمن */}
          <NavLink
            to="/dashboard/admin/home"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Home size={20} /> الرئيسية - أدمن
          </NavLink>

          <NavLink
            to="/dashboard/admin/new-users"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <UserPlus size={20} /> المشتركين الجدد
          </NavLink>

          <NavLink
            to="/dashboard/admin/kilo-price"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Settings size={20} /> سعر الكيلو
          </NavLink>

          <NavLink
            to="/dashboard/admin/issues-reports"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <FileText size={20} /> تقارير الأعطال
          </NavLink>

          <NavLink
            to="/dashboard/admin/users"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Users size={20} /> أسماء المشتركين
          </NavLink>

          {/* <NavLink
            to="/dashboard/admin/readings"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <BarChart3 size={20} /> القراءات والفواتير الشهرية
          </NavLink> */}

          <NavLink
            to="/dashboard/admin/support-staff"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Users size={20} /> موظفي الدعم الفني
          </NavLink>

          {/* <NavLink
            to="/dashboard/admin/invoices"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <FileText size={20} /> الفواتير الشهرية
          </NavLink> */}
        </nav>

        {/* ✅ زر تسجيل الخروج */}
        <button
          className={styles.logoutButton}
          onClick={() => navigate("/")}
        >
          <LogOut size={20} /> تسجيل الخروج
        </button>
      </aside>

      {/* ✅ محتوى الصفحات */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
