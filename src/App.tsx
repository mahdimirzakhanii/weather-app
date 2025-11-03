import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { useUser } from "./context/UserContext";
import MainDashboard from "./pages/dashboard/MainDashboard";
import MainHome from "./pages/home/MainHome";
import MainLogin from "./pages/login/MainLogin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useCustomTheme } from "./context/ThemeContext";
import { useState } from "react";

import { useLang } from "./context/LanguageContext";

export interface Location {
  latitude: number;
  longitude: number;
}

function App() {
  const { name } = useUser();
  const { lang } = useLang();
  const { theme } = useCustomTheme();
  const location = useLocation();
  const [search, setSearch] = useState<string>("");
  const [textFa, setTextFa] = useState<boolean>(lang === "fa" ? true : false);

  const path = location.pathname === "/" || location.pathname === "/login";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {!path && <Header setSearch={setSearch} setTextFa={setTextFa} />}

      <Box
        component="main"
        sx={{
          flex: 1,
          paddingTop: "100px",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/login" element={<MainLogin />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route
            path="/dashboard"
            element={<MainDashboard textFa={textFa} search={search} />}
          />
          {/* </Route> */}
        </Routes>
      </Box>
      {!path && <Footer />}
    </Box>
  );
}

export default App;
