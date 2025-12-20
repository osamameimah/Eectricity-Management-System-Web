 import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LogOut,
  Home,
  Users,
  Settings,
  FileText,
  UserPlus,
  Menu,
} from "lucide-react";
import styles from "./AdminLayout.module.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.dashboardContainer} dir="rtl">
      {/* زر القائمة (يعمل فقط على الموبايل) */}
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
          لوحة التحكم
        </h2>

        <nav className={styles.navButtons}>
          <NavLink to="/dashboard/admin" end className={({ isActive }) =>
            `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
          }>
            <Home size={20} />
            <span>الرئيسية</span>
          </NavLink>

          <NavLink to="/dashboard/admin/new-users" className={({ isActive }) =>
            `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
          }>
            <UserPlus size={20} />
            <span>مشتركين جدد</span>
          </NavLink>

          <NavLink to="/dashboard/admin/kilo-price" className={({ isActive }) =>
            `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
          }>
            <Settings size={20} />
            <span>سعر الكيلو</span>
          </NavLink>

          <NavLink to="/dashboard/admin/issues-reports" className={({ isActive }) =>
            `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
          }>
            <FileText size={20} />
            <span>الأعطال</span>
          </NavLink>

   
          <NavLink
            to="/dashboard/admin/users"
           className={({ isActive }) =>
            `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
          }
          >
            <Users size={20} /> <span>أسماء المشتركين</span>
          </NavLink>



          <NavLink
            to="/dashboard/admin/support-staff"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Users size={20} /> <span>أسماء الموظفين</span>
          </NavLink>


          <NavLink
            to="/dashboard/admin/ElectricalPanelsAndPoles"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <UserPlus size={20} /><span>الطابلونات والاعمدة</span> 
          </NavLink>

        </nav>

        <button
          className={styles.logoutButton}
          onClick={() => navigate("/")}
        >
          <LogOut size={20} />
          <span>خروج</span>
        </button>
      </aside>

      {/* Main */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;



/*
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
import styles from "./AdminLayout.module.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboardContainer} dir="rtl">
      <aside className={`${styles.sidebar} ${styles.userSidebar}`}>
        <h2 className={styles.sidebarTitle}>لوحة تحكم / أسامة ميمة </h2>

        <nav className={styles.navButtons}>
           <NavLink
            to="/dashboard/admin"
            end
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Home size={20} />الرئيسية
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



          <NavLink
            to="/dashboard/admin/support-staff"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <Users size={20} />أسماء الموظفين
          </NavLink>


          <NavLink
            to="/dashboard/admin/ElectricalPanelsAndPoles"
            className={({ isActive }) =>
              `${styles.navBtn} ${isActive ? styles.activeTab : ""}`
            }
          >
            <UserPlus size={20} />الطابلونات و الأعمدة
          </NavLink>

   

        </nav>

         <button
          className={styles.logoutButton}
          onClick={() => navigate("/")}
        >
          <LogOut size={20} /> تسجيل الخروج
        </button>
      </aside>

       <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;


*/