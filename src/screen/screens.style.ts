import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Screen = styled(Box)((props: any) => ({
  backgroundColor: props.theme.palette.background.primary,
  padding: "2vh 7%",
  minHeight: "calc(100vh - 85px)",
}));

export const SilverScreen = styled(Box)((props: any) => ({
  backgroundColor: props.theme.palette.background.variant,
  padding: "2vh 7%",
  minHeight: "calc(100vh - 85px)",
}));
