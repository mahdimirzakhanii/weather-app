import Box from "@mui/material/Box";
import { useCustomTheme } from "../../context/ThemeContext";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import useDataContext from "../../context/DataContext";

const MainCurrentData = () => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();
  const { fullData } = useDataContext();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: "607px",
        width: "607px",
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
        <span style={{ fontSize: "35px" }}>{t("monday")}</span>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: lang === "fa" ? "end" : "start",
            gap: 2,
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {t("24 Dec, 2023")}
          </span>
          <span style={{ fontSize: "14px", fontWeight: 400 }}>11:45 AM </span>
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
          <span style={{ fontSize: "40px" }}>{20}</span>
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
            {t("high")} : {20}
          </span>
          <span style={{ fontSize: "14px", display: "flex", gap: "30px" }}>
            {t("low")} : {20}
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
        <span style={{ fontSize: "32px", fontWeight: "400" }}>
          {t("cloudy")}
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
