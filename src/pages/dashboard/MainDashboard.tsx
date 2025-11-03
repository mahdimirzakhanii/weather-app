import Box from "@mui/material/Box";
import MainCurrentData from "../../components/current-data/MainCurrentData";
import MainTwoWeekData from "../../components/two-week-data/MainTwoWeekData";
import { useLang } from "../../context/LanguageContext";
import MainChart from "../../components/chart/MainChart";
import type { Location } from "../../App";
import { Slide, toast, ToastContainer } from "react-toastify";
import useDataContext from "../../context/DataContext";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  search: string;
  textFa: boolean;
};

const MainDashboard = ({ search, textFa }: Props) => {
  const { lang } = useLang();
  const { setFullData } = useDataContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    console.log("Getting your location... ");
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location found ");
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
      setLoading(true);
      try {
        const res = await axios.get(
          search
            ? `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                lang === "fa" ? "&lang=fa" : "&lang=en"
              }`
            : `https://api.openweathermap.org/data/2.5/weather?lat=${
                location?.latitude
              }&lon=${
                location?.longitude
              }&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                lang === "fa" ? "&lang=fa" : "&lang=en"
              }`
        );
        console.log(res?.data);
        setFullData(res?.data);
        setError(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
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

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: lang === "fa" ? "row" : "row-reverse",
            gap: 5,
          }}
        >
          <MainChart loading={loading} />
          <MainCurrentData error={error} loading={loading} />
        </Box>
        <MainTwoWeekData search={search} location={location} />
      </Box>

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
    </>
  );
};

export default MainDashboard;
