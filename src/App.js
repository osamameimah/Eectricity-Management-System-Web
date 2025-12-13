import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./routes";

function App() {
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
