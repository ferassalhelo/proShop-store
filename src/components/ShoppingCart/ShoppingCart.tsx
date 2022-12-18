import { Grid, Typography } from "@mui/material";
import Counter from "../Counter/Counter";
import Img from "../Img/Img";
import { DeleteBotton } from "./shoppingCart.style";

interface IProps {
  img: string;
  name: string;
  count: string;
  price: string;
}

export default function ShoppingCart(props: IProps) {
  return (
    <Grid
      position="relative"
      container
      width="100%"
      p="20px"
      alignItems="center"
      sx={{
        backgroundColor: "background.secondary",
        textAlign: { xs: "center", md: "left" },
      }}
      borderRadius="16px"
    >
      <Grid item xs={12} md={3} height="230px">
        <Img src={props.img} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography
          p="15px 25px"
          fontSize="24px"
          fontWeight="700"
          color="text.primary"
        >
          {props.name}
        </Typography>
      </Grid>
      <Grid item xs={5} md={2}>
        <Counter />
      </Grid>
      <Grid item xs={7} md={2}>
        <Typography
          textAlign="end"
          fontSize="30px"
          fontWeight="900"
          color="text.primary"
        >
          {props.price}$
        </Typography>
      </Grid>
      <DeleteBotton color="text.primary">x</DeleteBotton>
    </Grid>
  );
}
