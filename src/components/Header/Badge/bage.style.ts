import { styled } from "@mui/material/styles";
import { Badge, Box, Typography } from "@mui/material";

export const Badg = styled(Badge)(({ theme }) => ({
  "& span": {
    backgroundColor: theme.palette.primary.main,
    width: "15px",
    height: "15px",
    minWidth: "15px",
    fontSize: "12px",
    color: "black",
  },
  color: "white",
}));

export const BadgeName = styled(Typography)({
  color: "white",
  fontSize: "13px",
  paddingTop: "10px",
});

export const IconBox = styled(Box)({
  width: "25px",
  height: "25px",
  borderRadius: "40%",
  overflow: "hidden",
});
