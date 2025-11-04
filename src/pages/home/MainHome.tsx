import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useLang } from "../../context/LanguageContext";

const MainHome = () => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <span style={{ fontSize: "30px" }}>{t("go-login")}</span>
      <Button
        sx={{
          display: "flex",
          gap:1,
          flexDirection: lang === "fa" ? "row" : "row-reverse",
        }}
        endIcon={
          <Icon
            style={{ fontSize: "25px" }}
            icon="fluent:arrow-exit-32-regular"
          />
        }
        onClick={() => navigate("/login")}
        variant="text"
      >
        <span style={{ fontSize: "20px" }}>{t("login")}</span>
      </Button>
    </Box>
  );
};

export default MainHome;
