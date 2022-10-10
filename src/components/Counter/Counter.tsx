import { Grid } from "@mui/material";
import Button from "../Button/Button";
import style from "./counter.style";

export default function Counter() {
  const Style = style;

  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      borderColor="background.primary"
    >
      <Grid item width="50px">
        <Button
          variant="outlined"
          borderRadius="0"
          maxWidth="50px"
          padding="0"
          backgroundColor="background.primary"
        >
          -
        </Button>
      </Grid>
      <Grid item flexGrow={5}>
        <input style={Style.input} value={1} readOnly />
      </Grid>
      <Grid item width="50px">
        <Button
          variant="outlined"
          borderRadius="0"
          maxWidth="50px"
          padding="0"
          backgroundColor="background.primary"
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
}
