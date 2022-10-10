import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GridConainer = styled(Grid)({
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px 7%",
  minHeight: '700px'

});

export const ProductName = styled(Typography)({
  fontSize: "3.7rem",
  fontWeight: "900",
  margin: "10px 0",
});
