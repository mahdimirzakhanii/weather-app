import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
import { useCustomTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import { LuCalendarDays } from "react-icons/lu";
import { getEnglishDate, getPersianDate } from "../date/date";

const Footer = () => {
  const { lang } = useLang();
  const { theme, mode } = useCustomTheme();
  const { t } = useTranslation();
  const dateFa = getPersianDate();
  const dateEn = getEnglishDate();

  const date = lang === "fa" ? dateFa : dateEn;
  console.log(date);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: lang === "fa" ? "row-reverse" : "row",
        alignItems: "center",
        paddingY: 2,
        paddingX: 10,
        background:
          mode === "dark"
            ? "linear-gradient(135deg, #292F45 0%, #3F4861 50%, #151D32 100%)"
            : "linear-gradient(135deg, #F3FAFE 0%, #CCDDDD 50%, #F3FAFE 100%)",
        color: theme.palette.text.primary,
        boxShadow: "0px -4px 10px 0px #00000026",
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexDirection: lang === "fa" ? "row" : "row-reverse",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexDirection: lang === "fa" ? "row-reverse" : "row",
          }}
        >
          <LuCalendarDays style={{ fontSize: "20px" }} />
          <Box
            style={{
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              flexDirection: lang === "fa" ? "row-reverse" : "row",
            }}
          >
            <span>{date?.hour + ":" + date?.minute}</span>
            <span>{date?.weekday}</span>
            <span>{date?.day}</span>
            <span>{date?.monthName}</span>
            <span>{date?.year}</span>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexDirection: lang === "fa" ? "row-reverse" : "row",
          }}
        >
          <Icon icon="mdi:email-outline" style={{ fontSize: "24px" }} />
          <span
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: lang === "fa" ? "row-reverse" : "row",
            }}
          >
            {t("contactus")} <span>info@nadin.ir</span>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
