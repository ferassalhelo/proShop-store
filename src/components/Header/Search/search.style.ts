import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const GridComponent = styled(Grid)({
  borderRadius: "6px",
  width: "100%",
  flexWrap: "nowrap",
  backgroundColor: "white",
});

export const Input = styled("input")({
  width: "100%",
  height: "40px",
  maxHeight: "40px",
  padding: "0 3%",
  border: "none",
  outline: "none",
  borderRadius: "6px",
});
