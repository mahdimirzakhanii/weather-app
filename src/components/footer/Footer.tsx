import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";

const Footer = () => {
  const { lang } = useLang();
  const { theme } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        alignItems: "center",
        paddingY: 2,
        paddingX: 5,
        background: "linear-gradient(135deg, #292F45 0%, #3F4861 50%, #151D32 100%)",
        color: theme.palette.text.primary,
        boxShadow: "0px -4px 10px 0px #00000026",
        // position: حذف شد
        // bottom: حذف شد
        // zIndex: می‌تونی نگه داری یا حذف کنی
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexDirection: lang === "fa" ? "row-reverse" : "row",
        }}
      >
        <img src="/image/footer/icon.svg" alt="" />
        <span>{t("text-footer")}</span>
      </Box>
    </Box>
  );
};

export default Footer;