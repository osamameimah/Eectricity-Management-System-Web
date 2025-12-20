import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../pages/footerPages/PrivacyPolicy/PrivacyPolicy";
import Home from "../pages/Home/Home";
import ReturnPolicy from "../pages/footerPages/ReturnPolicy/ReturnPolicy";
import TermsOfUse from "../pages/footerPages/TermsOfUse/TermsOfUse";

import DashboardHome from "../pages/User/DashboardHome/DashboardHome";
import DashboardReadings from "../pages/User/DashboardReadings/DashboardReadings";
import DashboardWallet from "../pages/User/DashboardWallet/DashboardWallet";
import DashboardIssues from "../pages/User/DashboardIssues/DashboardIssues";
import SuperAdminNewEmployee from "../pages/SuperAdmin/SuperAdminNewEmployee/SuperAdminNewEmployee";
import AdminSupportStaff from "../pages/Admin/AdminSupportStaff/AdminSupportStaff";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import AdminNewUser from "../pages/Admin/AdminNewUser/AdminNewUser";
import KiloPrice from "../pages/Admin/AdminKiloPrice/AdminKiloPrice";
import AdminIssuesReports from "../pages/Admin/AdminIssuesReports/AdminIssuesReports";
import AdminAllUsers from "../pages/Admin/AdminAllUsers/AdminAllUsers";
import Invoices from "../pages/Admin/AdminInvoices/AdminInvoices";
 import UserLayout from "../Layouts/UserLayout/UserLayout";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import SuperAdminLayout from "../Layouts/SuperAdminLayout/SuperAdminLayout";
import AdminElectricalPanelsAndPoles from "../pages/Admin/AdminElectricalPanelsAndPoles/DashboardElectricalPanelsAndPoles";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<Home />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
        {/*   داشبورد المستخدم */}
        <Route path="/dashboard/user" element={<UserLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="readings" element={<DashboardReadings />} />
          <Route path="wallet" element={<DashboardWallet />} />
          <Route path="issues" element={<DashboardIssues />} />
        </Route>
        {/*   داشبورد الأدمن */}
        <Route path="/dashboard/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="new-users" element={<AdminNewUser />} />
          <Route path="kilo-price" element={<KiloPrice />} />
          <Route path="issues-reports" element={<AdminIssuesReports />} />
          <Route path="users" element={<AdminAllUsers />} />
          <Route path="support-staff" element={<AdminSupportStaff />} />
          <Route path="invoices" element={<Invoices />} />
          <Route
            path="ElectricalPanelsAndPoles"
            element={<AdminElectricalPanelsAndPoles />}
          />
        </Route>
        {/* // ذاشببورذ السوبر اذمن */}

        <Route path="/dashboard/superadmin" element={<SuperAdminLayout />}>
          <Route path="new-admin" element={<SuperAdminNewEmployee />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
