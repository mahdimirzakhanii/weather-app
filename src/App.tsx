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

function App() {
  const { name } = useUser();
  const { theme } = useCustomTheme();

  // const ProtectedRoute = () => {
  //   return name ? <Outlet /> : <Navigate to="/login" replace />;
  // };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          paddingTop: "100px",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/login" element={<MainLogin />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/dashboard" element={<MainDashboard />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
