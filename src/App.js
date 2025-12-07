import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Loginmodal from "./loginmodal";
import Dashboard from "./pages/Dashboard/Dashnoard";
import NewRegister from "./pages/NewRegister";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes />

      {/* <Dashboard/> */}
      {/* <NewRegister/> */}
  
     </>
  );
}

export default App;
