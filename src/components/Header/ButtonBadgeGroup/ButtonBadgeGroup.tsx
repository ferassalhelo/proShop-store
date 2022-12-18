import TranslateIcon from "@mui/icons-material/Translate";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { Grid } from "@mui/material";
import Badge from "../Badge/Badge";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { toggelTheme } from "../../../redux/theme/themeActions";

export default function ButtonBadgeGroup() {
  const [t, i18n] = useTranslation();
  const theme = useTheme();
  const dispach = useDispatch();

  const toggleLang = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
      document.dir = "ltr";
    } else {
      i18n.changeLanguage("ar");
      document.dir = "rtl";
    }
  };

  return (
    <Grid
      container
      spacing={3}
      textAlign="center"
      justifyContent="space-around"
      sx={{ pt: { xs: "15px", lg: "0" } }}
    >
      <Grid item>
        {true ? (
          <Badge icon={<PersonIcon />} text={t("userStatus")} path="/profile" />
        ) : (
          <Badge icon={<PersonIcon />} text={t("userStatus")} path="/login" />
        )}
      </Grid>
      <Grid item>
        {true ? (
          <Badge
            icon={<DashboardIcon />}
            text={t("dashpoard")}
            path="/dashpoard"
          />
        ) : null}
      </Grid>
      <Grid item>
        <Badge
          icon={<ShoppingCartIcon />}
          text={t("cart")}
          path="cart"
          badgeContent={7}
        />
      </Grid>
      <Grid item>
        <Badge icon={<TranslateIcon />} text={t("lang")} onClick={toggleLang} />
      </Grid>
      <Grid item>
        <Badge
          onClick={() => {
            dispach(toggelTheme());
          }}
          icon={
            theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )
          }
          text={theme.palette.mode === "dark" ? t("lightMode") : t("darkMode")}
        />
      </Grid>
    </Grid>
  );
}
