import { Grid, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import Img from "../Img/Img";

interface IProps {
  images: [string];
  name: string;
  count: number;
  price: number;
}

function OrderDetailsCard(props: IProps) {
  const [, i18n] = useTranslation();
  return (
    <>
      <Grid container bgcolor="transparent">
        <Grid
          item
          xs={12}
          sm={4}
          xl={4}
          p={i18n.dir() === "ltr" ? "0 25px 0 0" : "0 0 0 25px"}
        >
          <Img src={`${props.images[0]}`} />
        </Grid>
        <Grid item container alignContent="space-between" xs={12} sm={8} xl={8}>
          <Typography
            color="text.secondary"
            fontSize="22px"
            sx={{ mt: { xs: "30px", sm: "0" } }}
          >
            {props.name}
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography color="text.secondary" fontSize="22px">
              {props.price}
              <Typography component="span" fontSize="16px" pl="15px">
                x{props.count}
              </Typography>
            </Typography>
            <Typography fontSize="22px">
              {props.count * props.price}$
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ my: "35px" }} />
    </>
  );
}

export default OrderDetailsCard;
