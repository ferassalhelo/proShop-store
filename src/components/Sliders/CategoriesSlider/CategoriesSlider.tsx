import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import Divider from "../../Divider/Divider";
import CategoryCard from "../../CategoryCard/CategoryCard";
import categoryType from "../../../Types/ProductsTypes/categoryType";
import { useTranslation } from "react-i18next";
import "./categories.style.css";
import Progress from "../../Progress/Progress";

export default function CategoriesSlider({ data }: any) {
  const [t] = useTranslation();
  return (
    <Box p="40px 7% 0" position="relative">
      <Divider text={t("featuredCategories")} align="start" />
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.90": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.30": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.80": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwipe"
      >
        {data.loadingAllCategory ? (
          <Progress />
        ) : (
          data.allCategoryItems.map((item: categoryType) => {
            return (
              <SwiperSlide key={item.name}>
                <CategoryCard img={item.image} name={item.name} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </Box>
  );
}
