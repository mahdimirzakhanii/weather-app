import Box from "@mui/material/Box";
import { useCustomTheme } from "../../context/ThemeContext";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import useDataContext from "../../context/DataContext";
import { getDateTime } from "../date/date";

interface Props {
  loading: boolean;
  error: boolean;
}

const MainCurrentData = ({ loading, error }: Props) => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();
  const { fullData } = useDataContext();
  const { t } = useTranslation();

  const date = lang === "fa" ? getDateTime("fa") : getDateTime("en");
  return error ? (
    <Box
      sx={{
        maxWidth: "37%",
        width: "37%",
        height: "235px",
        maxHeight: "235px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <span>{t("error")}</span>
    </Box>
  ) : loading ? (
    <Box
      sx={{
        minWidth: "37%",
        width: "37%",
        height: "235px",
        maxHeight: "235px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <span>{t("loading")}</span>
    </Box>
  ) : (
    <Box
      sx={{
        minWidth: "37%",
        width: "37%",
        height: "235px",
        maxHeight: "235px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        justifyContent: "space-between",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: lang === "fa" ? "end" : "start",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            backgroundColor: "surface.300",
            color: "surface.700",
            borderRadius: 100,
            width: 173,
            padding: 1,
          }}
        >
          <Icon icon="subway:location-1" style={{ fontSize: "28px" }} />
          <span style={{ width: "100%", textAlign: "center", fontWeight: 400 }}>
            {fullData?.name}
          </span>
        </Box>
        <span style={{ fontSize: "35px" }}>{date?.weekday}</span>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: lang === "fa" ? "end" : "start",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <span>{date?.year}</span>
            <span>{date?.monthName}</span>
            <span>{date?.day}</span>
            <span>{date?.weekday}</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {date?.hour + ":" + date?.minute}
            </span>
            {/* <span>{date?.period}</span> */}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: lang === "fa" ? "end" : "start",
            gap: 1,
          }}
        >
          <span style={{ fontSize: "40px" }}>
            {fullData?.main?.temp.toString().slice(0, 2)}
          </span>
          <span style={{ fontSize: "36px" }}>°</span>
          <span style={{ fontSize: "40px" }}>C</span>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: lang === "fa" ? "end" : "start",
            gap: 2,
          }}
        >
          <span style={{ fontSize: "14px", display: "flex", gap: "30px" }}>
            {t("high")} :
            {fullData?.main?.temp_max && Math.trunc(fullData?.main?.temp_max)}
          </span>
          <span style={{ fontSize: "14px", display: "flex", gap: "30px" }}>
            {t("low")} :
            {fullData?.main?.temp_min && Math.trunc(fullData?.main?.temp_min)}
          </span>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: 1,
        }}
      >
        <img src="/image/dashboard/cloudy.png" alt="" />
        <span
          style={{ fontSize: "32px", fontWeight: "400", whiteSpace: "nowrap" }}
        >
          {fullData?.weather[0]?.description}
        </span>
        <span
          style={{
            fontWeight: "400",
            display: "flex",
            gap: 5,
            flexDirection: lang === "fa" ? "row" : "row-reverse",
          }}
        >
          {t("feels-like")}
          <span>25</span>
        </span>
      </Box>
    </Box>
  );
};

export default MainCurrentData;
