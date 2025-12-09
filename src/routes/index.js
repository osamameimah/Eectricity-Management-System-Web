import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivacyPolicy from "../pages/footerPages/PrivacyPolicy/PrivacyPolicy";
import Home from "../pages/Home/Home";
import ReturnPolicy from "../pages/footerPages/ReturnPolicy/ReturnPolicy";
import TermsOfUse from "../pages/footerPages/TermsOfUse/TermsOfUse";
import NewDash from "../pages/Dashboard/NewDash";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
        <Route path="/user" element={<NewDash/>}/>
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
