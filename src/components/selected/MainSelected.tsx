import { useState } from "react";
import SelectedTheme from "./SelectedTheme";
import SelectedLang from "./SelectedLang";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import Divider from "@mui/material/Divider";
import { useCustomTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LanguageContext";
interface Props {
  setTextFa: (value: boolean) => void;
}

const MainSelected = ({ setTextFa }: Props) => {
  const { mode } = useCustomTheme();
  const { lang } = useLang();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          minWidth: "40px",
          height: "40px",
          padding: 0,
          backgroundColor: open ? "primary.100" : "transparent",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: open ? "primary.500" : "#BBC1C4",
        }}
      >
        <Icon
          style={{ fontSize: "24px", color: open ? "#009CD8" : "#BBC1C4" }}
          icon="material-symbols-light:settings-outline"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem>
          <SelectedTheme />
        </MenuItem>

        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ borderWidth: 1 }}
        />

        <MenuItem>
          <SelectedLang setTextFa={setTextFa} />
        </MenuItem>

        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ borderWidth: 1 }}
        />

        <Button
          variant="text"
          dir={lang === "fa" ? "rtl" : "ltr"}
          sx={(theme) => ({
            width: "100%",
            paddingX: 3,
            display: "flex",
            gap: lang === "fa" ? 2 : 0,
            justifyContent: "start",
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          })}
          startIcon={
            <Icon
              style={{
                color: mode === "light" ? "#0008" : "#fff",
                rotate: lang === "fa" ? "180deg" : "0deg",
              }}
              icon="fluent:arrow-exit-32-regular"
            />
          }
        >
          {t("exit")}
        </Button>
      </Menu>
    </div>
  );
};

export default MainSelected;
