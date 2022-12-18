import { Typography, Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

type obj = Array<{ name: string; value: string }>;

interface IProps {
  orderNumber: string;
  shippingAddress: string;
  orderItems: string;
}

function PaymentSuccess(props: IProps) {
  const [t] = useTranslation();

  let data: obj = [
    {
      name: "orderNumber",
      value: props.orderNumber,
    },
    {
      name: "shippingAddress",
      value: props.shippingAddress,
    },
    {
      name: "orderItems",
      value: props.orderItems,
    },
  ];

  return (
    <Box p="3vh 2.5vw" bgcolor="background.secondary" borderRadius="16px">
      <Box maxWidth={"lg"}>
        <Typography variant="h4" fontWeight="600" color="text.primary">
          {t("paymentSuccess")}
        </Typography>

        {data.map((data, indx) => {
          return (
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              key={indx}
            >
              <Grid item xs={12} md={6} my="30px">
                <Typography variant="h5" fontWeight="600" color="text.primary">
                  {t(data.name)}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} my="10px">
                <Typography color="text.secondary">{data.value}</Typography>
              </Grid>
            </Grid>
          );
        })}
        <Typography maxWidth={"350px"} color="text.primary" mt="25px">
          {t("sentEmail")}
        </Typography>
      </Box>
    </Box>
  );
}

export default PaymentSuccess;
