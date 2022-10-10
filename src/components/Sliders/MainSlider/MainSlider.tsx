import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./mainSlider.css";
import { GridConainer, ProductName } from "./mainSlider.style";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../../Img/Img";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductType from "../../../Types/ProductsTypes/productType";
import Progress from "../../Progress/Progress";

export default function MainSlider({ data }: any) {
  const [t] = useTranslation();

  return (
    <Box sx={{ backgroundColor: "background.secondary" }}>
      <Swiper
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.loadingTopProducts ? (
          <Progress />
        ) : (
          data.topProductsItems.map((item: ProductType) => {
            return (
              <SwiperSlide key={item._id}>
                <GridConainer
                  container
                  sx={{
                    flexDirection: { xs: "column-reverse", md: "row" },
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  <Grid
                    item
                    md={5}
                    maxWidth="550px !important"
                    color="text.primary"
                    sx={{ py: { xs: "60px", md: "0" } }}
                  >
                    <Typography fontSize="32px">
                      Save up to {item.discount}$
                    </Typography>
                    <ProductName>{item.name}</ProductName>
                    <Typography fontSize="32px">
                      AirPods are the best-selling headphones in the world
                    </Typography>
                    <Button
                      borderRadius="20px"
                      width="auto"
                      padding={"0"}
                      marginTop="35px"
                    >
                      <Link
                        style={{ padding: "15px 45px" }}
                        to={`product/${item._id}`}
                      >
                        {t("shopNow")}
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item md={6} lg={5} width="inherit">
                    <Img src={item.images[0]} />
                  </Grid>
                </GridConainer>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </Box>
  );
}
