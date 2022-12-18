import { AppBar, Box, Grid, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(AppBar)({
  position: "fixed",
  background: "black",
  height: "85px",
  justifyContent: "center",
  padding: "0 7%",
  boxShadow: "none !important", 
});

export const GridConainer = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
});

export const Container = styled(Box)({
  justifyContent: "space-between",
});

export const MenuIcn = styled(MenuIcon)({
  color: "white",
});

export const BgDiv = styled("div")({
  height: "85px",
});

export const HeaderMenu = styled(Menu)({
  "& ul": { backgroundColor: "black" },
});
