import { styled } from "@mui/material";

export const Input = styled("input")(({ theme }: any) => ({
  width: "100%",
  height: "40px",
  outline: "none",
  borderRadius: "0",
  border: "1px solid",
  borderColor: theme.palette.background.secondary,
  textAlign: "center",
  fontWeight: "bold",
  borderWidth: "1px 0",
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.primary,
}));
