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
import { useCustomeTheme } from "./context/ThemeContext";

function App() {
  const { name } = useUser();
  const { theme } = useCustomeTheme();

  const ProtectRoute = () => {
    return name ? <Outlet /> : <Navigate to="/login" replace />;
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
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
