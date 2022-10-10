import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box } from "@mui/material";
import Divider from "../../Divider/Divider";
import { useTranslation } from "react-i18next";
import ProductCard from "../../ProductCards/ProductCard/ProductCard";
import "./featuredProducts.style.css";
import ProductType from "../../../Types/ProductsTypes/productType";
import Progress from "../../Progress/Progress";

export default function FeaturedProducts({ data }: any) {
  const [t] = useTranslation();
  return (
    <Box p="40px 7%" sx={{ backgroundColor: "background.variant" }}>
      <Divider text={t("featuredProducts")} />
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.10": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.70": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwip"
      >
        {data.loadingTopProducts ? (
          <Progress />
        ) : (
          data.topProductsItems.map((item: ProductType) => {
            return (
              <SwiperSlide key={item._id}>
                <ProductCard data={item} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </Box>
  );
}
