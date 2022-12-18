import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";

interface IProps {
  con?: true;
}

function OrderDetails(props: IProps) {
  const [t] = useTranslation();
  return (
    <Box
      p="35px 25px"
      bgcolor="background.secondary"
      borderRadius="16px"
      width="530px"
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mb="30px"
      >
        <Typography variant="h4" fontWeight="600">
          {t("orderDetails")}
        </Typography>
        {props.con ? (
          <Typography
            color="text.secondary"
            variant="h5"
            fontWeight="500"
            sx={{ textDecoration: "underline" }}
          >
            <Link to="/cart">{t("change")}</Link>
          </Typography>
        ) : null}
      </Grid>
      {props.con ? (
        <>
          {" "}
          <OrderDetailsCard
            count={4}
            name="mobile kjbkj kj nknlkn lknlkjlkjj lkn "
            price={99}
            images={["alkf"]}
          />
          <OrderDetailsCard
            count={4}
            name="mobile kjbkj kj nknlkn lknlkjlkjj lkn "
            price={99}
            images={["alkf"]}
          />{" "}
        </>
      ) : null}
      <Grid
        container
        justifyContent="space-between"
        color="text.secondary"
        mb="15px"
      >
        <Typography>{t("subtotal")}</Typography>
        <Typography>877$</Typography>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        color="text.secondary"
        mb="15px"
      >
        <Typography>{t("tax")}</Typography>
        <Typography>7$</Typography>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        color="text.secondary"
        mb="15px"
      >
        <Typography>{t("shipping")}</Typography>
        <Typography>7$</Typography>
      </Grid>
      <Grid container justifyContent="space-between" mb="15px">
        <Typography fontWeight={"bold"}>{t("total")}</Typography>
        <Typography fontWeight={"bold"}>878$</Typography>
      </Grid>
    </Box>
  );
}

export default OrderDetails;
