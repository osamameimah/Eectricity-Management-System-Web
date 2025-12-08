import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashnoard";
 import PrivacyPolicy from "../pages/footerPages/PrivacyPolicy/PrivacyPolicy";
import Home from "../pages/Home/Home";
import ReturnPolicy from "../pages/footerPages/ReturnPolicy/ReturnPolicy";
import TermsOfUse from "../pages/footerPages/TermsOfUse/TermsOfUse";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
        {/* <Route path="/newSubsucriber" element={<NewRegister />} /> */}
           <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
