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
import { useTranslation } from "react-i18next";
import { useUser } from "../../context/UserContext";

type Props = {
  search: string;
  textFa: boolean;
};

const MainDashboard = ({ search, textFa }: Props) => {
  const { lang } = useLang();
  const { name } = useUser();
  const { t } = useTranslation();
  const { setFullData } = useDataContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorLocation, setErrorLocation] = useState(true);
  const [location, setLocation] = useState<Location | null>(null);
  useEffect(() => {
    console.log("Getting your location... ");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location found ");
        setLocation(position.coords);
        setErrorLocation(false);
      },
      (error) => {
        console.error(error);
        setErrorLocation(true);
        toast.error(t("error-toast"), {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          rtl: lang === "fa" ? true : false,
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

  console.log(search);
  console.log(location);

  useEffect(() => {
    if (!name) return;
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
      }
    };
    handleGetData();
  }, [location, search, name, textFa, lang, setFullData]);

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
            gap: 2,
          }}
        >
          <MainChart search={search} location={location} />
          <MainCurrentData error={error} loading={loading} />
        </Box>
        <MainTwoWeekData
          errorLocation={errorLocation}
          search={search}
          location={location}
        />
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
