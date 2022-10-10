import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";

export const Rate = styled(Rating)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2.3rem",
  textAlign: "start",
}));
