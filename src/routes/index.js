import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../pages/footerPages/PrivacyPolicy/PrivacyPolicy";
import Home from "../pages/Home/Home";
import ReturnPolicy from "../pages/footerPages/ReturnPolicy/ReturnPolicy";
import TermsOfUse from "../pages/footerPages/TermsOfUse/TermsOfUse";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import DashboardReadings from "../components/Dashboard/DashboardReadings/DashboardReadings";
import DashboardIssues from "../components/Dashboard/DashboardIssues/DashboardIssues";
import DashboardWallet from "../components/Dashboard/DashboardWallet/DashboardWallet";
import AdminHome from "../components/DashboardAdmin/AdminHome/AdminHome";
import AdminNewUser from "../components/DashboardAdmin/AdminNewUser/AdminNewUser";
import AdminKiloPrice from "../components/DashboardAdmin/AdminKiloPrice/AdminKiloPrice";
import AdminIssuesReports from "../components/DashboardAdmin/AdminIssuesReports/AdminIssuesReports";
import AdminSupportStaff from "../components/DashboardAdmin/AdminSupportStaff/AdminSupportStaff";
import AdminInvoices from "../components/DashboardAdmin/AdminInvoices/AdminInvoices";
import AdminAllUsers from "../components/DashboardAdmin/AdminAllUsers/AdminAllUsers";
import SuperAdminNewEmployee from "../components/DashboardSupurAdmin/SuperAdminNewEmployee/SuperAdminNewEmployee";
import DashboardElectricalPanelsAndPoles from "../components/DashboardAdmin/DashboardElectricalPanelsAndPoles/DashboardElectricalPanelsAndPoles";
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
        <Route path="/dashboarduser" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="readings" element={<DashboardReadings />} />
          <Route path="wallet" element={<DashboardWallet />} />
          <Route path="issues" element={<DashboardIssues />} />
          {/*   داشبورد الأدمن */}
          <Route path="admin/home" element={<AdminHome />} />
          <Route path="admin/new-users" element={<AdminNewUser />} />
          <Route path="admin/kilo-price" element={<AdminKiloPrice />} />
          <Route path="admin/issues-reports" element={<AdminIssuesReports />} />
          <Route path="admin/users" element={<AdminAllUsers />} />
          <Route path="admin/support-staff" element={<AdminSupportStaff />} />
          <Route path="admin/invoices" element={<AdminInvoices />} />
          <Route
            path="/dashboarduser/admin/new-admin"
            element={<SuperAdminNewEmployee />}
          />
          <Route
            path="DashboardElectricalPanelsAndPoles"
            element={<DashboardElectricalPanelsAndPoles />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
