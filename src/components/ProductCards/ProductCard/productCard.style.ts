import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent as CardContaints,
  Typography,
} from "@mui/material";

export const CardBox = styled(Card)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.primary,
  position: "relative",
  width: "100%",
  boxShadow: "none",
  borderRadius: "16px",
  paddingTop: "20px",
  textAlign: "center",
}));

export const DiscountPercentage = styled("div")(({ theme }) => ({
  borderRadius: "50%",
  width: "85px",
  height: "85px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "white",
  position: "absolute",
  top: "10px",
  right: "10px",
}));

export const CardContent = styled(CardContaints)({
  textAlign: "center",
});

export const ProductName = styled(Typography)({
  fontSize: "1.5rem",
  height: "70px",
  marginTop: "10px",
});

export const PriceContainer = styled(Box)({ paddingTop: "15px" });

export const ProductDiscount = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.paper,
  display: "inline-block",
  padding: "0 15px 15px 0",
  fontSize: "30px",
  fontWeight: "600",
}));

export const ProductPrice = styled(Typography)({
  display: "inline-block",
  paddingBottom: "15px",
  fontSize: "30px",
  fontWeight: "700",
});
