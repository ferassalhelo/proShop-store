import { styled, Box, Typography } from "@mui/material";

export const ColorItem = styled(Box)((props: any) => ({
  backgroundColor: props.bgcolor,
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  border: "1px solid black",
}));

export const ColorBox = styled(Box)(({ theme }: any) => ({
  marginInlineEnd: "2vw",
  borderRadius: "50%",
  padding: "4px",
  border: "2px solid",
  borderColor: theme.palette.text.primary,
  cursor: "pointer",
}));

export const SizeBox = styled(Box)({
  marginInlineEnd: "2.5vw",
  borderRadius: "10px",
  padding: "12px 0",
  width: "8vw",
  minWidth: "80px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "12px",
  cursor: "pointer",
});

export const ActiveValue = styled("span")({
  fontWeight: "bold",
  color: "text.primary",
  display: "inline",
  fontSize: "24px",
});
