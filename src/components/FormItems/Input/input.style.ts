import { styled } from "@mui/material/styles";

export const Inputs = styled("input")((props) => ({
  outline: "none",
  border: "1px solid",
  borderColor: props.theme.palette.text.primary,
  borderRadius: "6px",
  backgroundColor: "transparent",
  fontSize: "16px",
  padding: "10px 16px",
  color: props.theme.palette.text.primary,
  height: props.height || "40px",
  width: "100%",
  display: "block",
}));
