import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import { useUser } from "./context/UserContext";
import MainDashboard from "./pages/dashboard/MainDashboard";
import MainHome from "./pages/home/MainHome";
import MainLogin from "./pages/login/MainLogin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useCustomTheme } from "./context/ThemeContext";
import useDataContext from "./context/DataContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLang } from "./context/LanguageContext";

export interface Location {
  latitude: number;
  longitude: number;
}

function App() {
  const { name } = useUser();
  const { lang } = useLang();
  const { theme } = useCustomTheme();
  const { setFullData } = useDataContext();
  const [search, setSearch] = useState<string>("");
  const [textFa, setTextFa] = useState<boolean>(lang === "fa" ? true : false);
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Getting your location... 🔍");
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location found 🎉");
        setLocation(position.coords);
      },
      (error) => {
        console.error(error);
        setLoading(false);
        toast.error("Failed to get location", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          rtl: false,
          theme: "dark",
          transition: Slide,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const res = await axios.get(
          search
            ? `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                textFa ? "&lang=fa" : "&lang=en"
              }`
            : `https://api.openweathermap.org/data/2.5/weather?lat=${
                location?.latitude
              }&lon=${
                location?.longitude
              }&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                textFa ? "&lang=fa" : "&lang=en"
              }`
        );
        console.log(res?.data);
        setFullData(res?.data);
      } catch (error) {
        console.log(error);
        toast.error("Not Found !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          rtl: false,
          theme: "dark",
          transition: Slide,
        });
      }
    };
    handleGetData();
  }, [location, search, textFa, setFullData]);

  // const ProtectedRoute = () => {
  //   return name ? <Outlet /> : <Navigate to="/login" replace />;
  // };

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
      <Header setTextFa={setTextFa} />

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/login" element={<MainLogin />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route
              path="/dashboard"
              element={
                <MainDashboard
                  search={search}
                  location={location}
                  textFa={textFa}
                  setSearch={setSearch}
                />
              }
            />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </Box>

      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
    </Box>
  );
}

export default App;
