import Img from "../../../components/Img/Img";
import { Screen } from "../../screens.style";
import img from "../../../assets/imges/notFound.svg";
import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function NotFoundPage() {
  const[t]= useTranslation()
  return (
    <Screen textAlign="center">
      <Box height="80vh !important">
        <Img src={img} />
        <Typography
          variant="h4"
          pt="20px"
          fontWeight="bold"
          color="text.primary"
        >
          {t("pNotFound")}
        </Typography>
      </Box>
    </Screen>
  );
}
