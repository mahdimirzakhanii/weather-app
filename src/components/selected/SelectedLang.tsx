import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";

const SelectedLang = () => {
  const { lang, setLang } = useLang();
  const { i18n } = useTranslation(); 

  const handleLanguage = (
    event: React.SyntheticEvent,
    newValue: "fa" | "en"
  ) => {
    setLang(newValue);
    i18n.changeLanguage(newValue);
    localStorage.setItem("lang", newValue);
  };

  return (
    <Tabs
      value={lang}
      onChange={handleLanguage}
      variant="scrollable"
      aria-label="secondary tabs example"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        "& .MuiTab-root:focus": {
          outline: "none",
        },
        "& .Mui-selected": {
          outline: "none",
        },
      }}
    >
      <Tab label="فارسی" value="fa" />
      <Tab label="English" value="en" />
    </Tabs>
  );
};

export default SelectedLang;
