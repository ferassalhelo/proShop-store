import { Grid } from "@mui/material";
import Button from "../Button/Button";
import { Input } from "./counter.style";

export default function Counter() {
  return (
    <Grid container wrap="nowrap" borderColor="background.primary">
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
        <Input value={1} readOnly />
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
