import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Breadcrumbs as Breadc, Typography } from "@mui/material";

interface IProps {
  lable: string;
}

export default function Breadcrumbs(props: IProps) {
  let theme = useTheme();
  const [t] = useTranslation();

  return (
    <Breadc sx={{ fontSize: "1.5rem" }}>
      <Link
        style={{
          color: `${theme.palette.text.secondary}`,
        }}
        to="/"
      >
        {t("breadcrumbs")}
      </Link>
      <Typography fontSize={"1.5rem"} color="text.primary">
        {props.lable}
      </Typography>
    </Breadc>
  );
}
