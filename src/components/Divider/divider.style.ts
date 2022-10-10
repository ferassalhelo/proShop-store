import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const DividerBox = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid",
  borderColor: theme.palette.text.secondary,
  lineHeight: 0,
}));

export const Title = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.text.primary,
  fontSize: "32px",
  fontWeight: "700",
  padding: "25px 0",
}));

export const DividerLines = styled(Box)(({ theme }) => ({
  width: "200px",
  maxWidth: "200px",
  minHeight: "7px",
  backgroundColor: theme.palette.primary.main,
  display: "inline-block",
}));
