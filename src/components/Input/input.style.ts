import { styled } from "@mui/material/styles";

export const Inputs = styled("input")(({ theme }) => ({
  outline: "none",
  border: "1px solid",
  borderColor: theme.palette.text.primary,
  borderRadius: "6px",
  backgroundColor: "transparent",
  fontSize: "16px",
  padding: "10px 16px",
  color: "main",
  maxHeight: "40px",
}));
