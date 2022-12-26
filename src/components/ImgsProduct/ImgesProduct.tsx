import Img from "../Img/Img";
import { Box, Grid } from "@mui/material";

interface IProps {
  imges: string[];
}

function ImgesProduct(props: IProps) {
  let arr = props.imges;

  return (
    <Box>
      <Box mb="50px">
        <Img src={`${arr[0]}`} />
      </Box>
      <Grid container gap="20px" wrap="nowrap" mb="50px">
        {arr.slice(1).map((item, index) => (
          <Grid item xs={4} key={index}>
            <Img src={`${item}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImgesProduct;
