import { Box, Grid, Typography } from "@mui/material";
import Rating from "../Ratting/Ratting";

interface IProps {
  name: string;
  date: string;
  rate: string;
  text: string;
}

export default function ProductReview(props: IProps) {
  return (
    <Box>
      <Typography variant="h5" color="text.primary" fontWeight="bold">
        Jenifer Medhurst
      </Typography>
      <Grid container justifyContent="space-between" alignItems='center'>
        <Grid item py="15px">
          <Rating readonly value={4} />
        </Grid>
        <Grid item>
          <Typography color="text.secondary">28th March 2022</Typography>
        </Grid>
      </Grid>
      <Typography
        bgcolor="background.secondary"
        color="text.primary"
        p="20px 30px"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita.
      </Typography>
    </Box>
  );
}
