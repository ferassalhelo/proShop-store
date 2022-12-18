import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageTitle = styled(Typography)((props) => ({
  color: props.theme.palette.text.primary,
  margin: "30px 0",
  fontWeight: "bold",
}));

export const ContentBox = styled(Box)((props: any) => ({
  backgroundColor: props.theme.palette.background.secondary,
  padding: "60px 40px",
  borderRadius: "16px",
}));

export const ValedationBox = styled(Box)({
  color: "red",
  marginTop: "5px",
});

export const ContentTitle = styled(Typography)((props: any) => ({
  color: props.theme.palette.text.primary,
}));

export const FiledTitle = styled(Typography)((props: any) => ({
  color: props.theme.palette.text.primary,
  margin: "35px 0 10px 0",
}));


