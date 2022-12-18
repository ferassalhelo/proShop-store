import { useState } from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import ButtonBadgeGroup from "./ButtonBadgeGroup/ButtonBadgeGroup";
import { Grid, IconButton } from "@mui/material";
import {
  GridConainer,
  HeaderContainer,
  Container,
  MenuIcn,
  BgDiv,
  HeaderMenu,
} from "./Header.style";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <HeaderContainer>
        <GridConainer container sx={{ display: { xs: "none", lg: "flex" } }}>
          <Logo />
          <Grid item lg={5} >
            <Search />
          </Grid>
          <Grid item>
            <ButtonBadgeGroup />
          </Grid>
        </GridConainer>
        <Container sx={{ display: { xs: "flex", lg: "none" } }}>
          <Logo />
          <IconButton
            aria-label="account of current user"
            size="large"
            onClick={handleOpenNavMenu}
          >
            <MenuIcn />
          </IconButton>
          <HeaderMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", lg: "none" } }}
          >
            <Search />
            <ButtonBadgeGroup />
          </HeaderMenu>
        </Container>
      </HeaderContainer>
      <BgDiv></BgDiv>
    </>
  );
};
export default Header;
