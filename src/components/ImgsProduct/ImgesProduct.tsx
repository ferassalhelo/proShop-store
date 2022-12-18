import Img from "../Img/Img";
import img from "../../assets/imges/empty.svg";
import { Box, Grid } from "@mui/material";

function ImgesProduct() {
  let arr = [img];
  return (
    <Box>
      <Box mb="50px">
        <Img src={img} />
      </Box>
      <Grid container gap="20px" wrap="nowrap" mb="50px">
        {arr.slice(1).map((item, index) => (
          <Grid item xs={4} key={index}>
            <Img src={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImgesProduct;
