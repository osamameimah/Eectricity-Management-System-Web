import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./routes";

// import { useEffect } from "react";
// import { db } from "./../src/Firebase/config";

function App() {
  // useEffect(() => {
  //    if (db) {
  //     console.log("✅ تم الاتصال بـ Firebase بنجاح!");
  //     console.log("قاعدة البيانات جاهزة:", db);
  //   } else {
  //     console.error("❌ فشل الاتصال، تحقق من الإعدادات.");
  //   }
  // }, []);

  const location = useLocation();

  // إخفاء الهيدر والفوتر عند الدخول على /user
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Header />}

      <AppRoutes />

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
