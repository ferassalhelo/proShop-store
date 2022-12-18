import { Typography, Divider,Box } from "@mui/material";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

interface IProps {
  SubTotalBeforDiscount?: number;
  SubTotal: number;
  itemsCount: number;
}

function SubTotal(props: IProps) {
const [t] = useTranslation();
  return (
    <Box bgcolor={"background.secondary"} p="24px" borderRadius="16px">
      <Typography variant="h4" fontWeight="500">
        {t("subtotal")} ({props.itemsCount}) items
      </Typography>
      {props.SubTotalBeforDiscount ? (
        <Typography
          color="text.secondary"
          variant="h5"
          my="20px"
          sx={{ textDecoration: "line-through" }}
          fontWeight="500"
        >
          {props.SubTotalBeforDiscount}$
        </Typography>
      ) : null}
      <Typography fontWeight="bold" color="text.primary" variant="h4">
        {props.SubTotal}$
      </Typography>
      <Divider sx={{ my: "40px" }} />
      <Button padding="20px 0 ">{t("ProceedToCheckout")}</Button>
    </Box>
  );
}

export default SubTotal;
