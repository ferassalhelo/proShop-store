import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Grid)({
  justifyContent: "space-between",
  gap: "40px",
  marginTop: "60px",
});

export const SecondaryContainer = styled(Grid)((props: any) => ({
  padding: "25px",
  backgroundColor: props.theme.palette.background.secondary,
  borderRadius: "16px",
  height: "100%",
}));

export const ImgContainer = styled(Box)({
  borderRadius: "50%",
  overflow: "hidden",
  margin: "20px",
});
