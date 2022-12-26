import { Box, Grid, Typography } from "@mui/material";
import { ReviewType } from "../../Types/ProductsTypes/productType";
import Rating from "../Ratting/Ratting";

interface IProps {
  data: ReviewType;
}

export default function ProductReview({ data }: IProps) {
  return (
    <Box mb="50px">
      <Typography variant="h5" color="text.primary" fontWeight="bold">
        {data.name}
      </Typography>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item py="15px">
          <Rating readonly value={+data.rating} />
        </Grid>
        <Grid item>
          <Typography color="text.secondary">{data.createdAt}</Typography>
        </Grid>
      </Grid>
      <Typography
        bgcolor="background.secondary"
        color="text.primary"
        p="20px 30px"
      >
        {data.comment}
      </Typography>
    </Box>
  );
}
