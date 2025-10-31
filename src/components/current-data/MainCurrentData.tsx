import Box from "@mui/material/Box";
import { useCustomTheme } from "../../context/ThemeContext";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const MainCurrentData = () => {
  const { mode } = useCustomTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        maxWidth: "607px",
        width: "607px",
        borderRadius: "24px",
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        backgroundColor: mode === "dark" ? "#292F45" : "surface.200",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 1,
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
            San Francisco
          </span>
        </Box>
        <span style={{ fontSize: "35px" }}>{t("monday")}</span>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: 400 }}>
            {t("24 Dec, 2023")}
          </span>
          <span style={{ fontSize: "14px", fontWeight: 400 }}>11:45 AM </span>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
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
    </Box>
  );
};

export default MainCurrentData;
