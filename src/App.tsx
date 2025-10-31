import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Box from "@mui/material/Box";
import { useUser } from "./context/UserContext";
import MainDashboard from "./pages/dashboard/MainDashboard";
import MainHome from "./pages/home/MainHome";
import MainLogin from "./pages/login/MainLogin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useCustomTheme } from "./context/ThemeContext";
// import { useTranslation } from "react-i18next";

function App() {
  const { name } = useUser();
  const { theme } = useCustomTheme();
  // const { i18n } = useTranslation();

  const ProtectRoute = () => {
    return name ? <Outlet /> : <Navigate to="/login" replace />;
  };

  // useEffect(() => {
  //   document.dir = i18n.language === "fa" ? "rtl" : "ltr";
  //   document.documentElement.lang = i18n.language;
  // }, [i18n.language]);

  return (
    <Box
      sx={{
        width: "95%",
        minHeight: "100vh",
        display: "flex",
        marginX:"auto",
        marginTop:'70px',
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box>
        <Header />
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route element={<ProtectRoute />}></Route>
        </Routes>
      </BrowserRouter>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
