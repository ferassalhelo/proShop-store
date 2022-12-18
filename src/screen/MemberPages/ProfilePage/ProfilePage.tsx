import { Divider, Grid, Typography } from "@mui/material";
import { Screen } from "../../screens.style";
import img from "../../../assets/imges/image.jpg";
import Img from "../../../components/Img/Img";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import {
  ImgContainer,
  MainContainer,
  SecondaryContainer,
} from "./ProfilePage.style";
import { useTranslation } from "react-i18next";

type obj = Array<{ name: string; value: string }>;

export default function ProfilePage() {
  const [t] = useTranslation();
  let [myOrder, handleMyOrder] = useState(false);
  let profileData = {
    _id: "string",
    firstName: "string",
    lastName: "string",
    profileImage: "string",
    dateOfBirth: "string",
    email: "string",
    isAdmin: true,
    cart: {},
    token: "string",
  };
  let data: obj = [
    {
      name: "firstName",
      value: profileData.firstName,
    },
    {
      name: "lastName",
      value: profileData.lastName,
    },
    {
      name: "email",
      value: profileData.email,
    },
    {
      name: "birthday",
      value: profileData.dateOfBirth,
    },
  ];

  return (
    <Screen>
      <MainContainer container sx={{ flexWrap: { md: "nowrap" } }}>
        <Grid item xs={12} md={4}>
          <SecondaryContainer>
            <Grid
              container
              alignItems="center"
              onClick={() => handleMyOrder(false)}
              sx={{ cursor: "pointer" }}
            >
              <Grid item xs={12} xl={4}>
                <ImgContainer border="3px solid #FCDD06">
                  <Img src={img}></Img>
                </ImgContainer>
              </Grid>
              <Grid item xs={12} xl={8}>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  Amy Mayer
                </Typography>
              </Grid>
            </Grid>

            <Typography
              variant="h5"
              my="30px"
              onClick={() => handleMyOrder(true)}
              sx={{ cursor: "pointer" }}
              color="text.primary"
            >
              {t("myOrder")}
            </Typography>
            <Divider />
            <Typography
              color="text.primary"
              variant="h6"
              my="30px"
              sx={{ cursor: "pointer" }}
            >
              {t("logout")}
            </Typography>
          </SecondaryContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <SecondaryContainer>
            {myOrder ? null : (
              <Grid container justifyContent="space-between">
                <Grid
                  item
                  xs={12}
                  md={5}
                  xl={3}
                  textAlign="center"
                  sx={{ order: { md: 999 } }}
                >
                  <ImgContainer>
                    <Img src={img}></Img>
                  </ImgContainer>
                  <Button maxWidth="160px" fontSize="13px">
                    {t("uploadNewPhoto")}
                  </Button>
                </Grid>
                <Grid xs={12} item md={7}>
                  <Typography variant="h4" py="30px" color="text.primary">
                    {t("myProfile")}
                  </Typography>
                  {data.map((data, indx) => {
                    return (
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        key={indx}
                      >
                        <Grid item xs={12} lg={5} xl={6} my="30px">
                          <Typography variant="h5" color="text.secondary">
                            {t(`${data.name}`)}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} lg={7} xl={6}>
                          <Typography variant="h5" color="text.primary">
                            {data.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                  <Button maxWidth="160px" fontSize="13px" margin="10px 0">
                    {t("ChangePassword")}
                  </Button>
                </Grid>
              </Grid>
            )}
          </SecondaryContainer>
        </Grid>
      </MainContainer>
    </Screen>
  );
}
