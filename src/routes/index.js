import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashnoard";
 import TermsOfUse from "../pages/footerPages/TermsOfUse";
import ReturnPolicy from "../pages/footerPages/ReturnPolicy";
import PrivacyPolicyFooter from "../pages/footerPages/PrivacyPolicyFooter";
import Home from "../pages/Home/Home";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
        {/* <Route path="/newSubsucriber" element={<NewRegister />} /> */}
           <Route path="/PrivacyPolicyFooter" element={<PrivacyPolicyFooter />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
