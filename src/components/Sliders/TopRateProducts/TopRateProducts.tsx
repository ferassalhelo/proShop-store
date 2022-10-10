import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box } from "@mui/material";
import Divider from "../../Divider/Divider";
import { useTranslation } from "react-i18next";
import ProductCard from "../../ProductCards/ProductCard/ProductCard";
import ProductType from "../../../Types/ProductsTypes/productType";
import "./featuredProducts.style.css";
import Progress from "../../Progress/Progress";

export default function TopRateProducts({ data }: any) {
  const [t] = useTranslation();
  return (
    <Box p="40px 7%">
      <Divider text={t("featuredProducts")} />
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@1.10": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.70": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
        className="Swip"
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
