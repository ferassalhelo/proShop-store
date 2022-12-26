import SimpleSlider from "../../../components/Sliders/MainSlider/MainSlider";
import { Box } from "@mui/material";
import Categories from "../../../components/Sliders/CategoriesSlider/CategoriesSlider";
import FeaturedProducts from "../../../components/Sliders/FeaturedProducts/FeaturedProducts";
import TopRateProducts from "../../../components/Sliders/TopRateProducts/TopRateProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTopProducts,
  getAllCategory,
} from "../../../redux/products/productsActions";
import { GET_AUTH_SUCCESS } from "../../../redux/auth&profile/auth&profileTypes";
import { getProfile } from "../../../redux/auth&profile/auth&profileActions";

export default function HomePage() {
  const store = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    (() =>
      store.topProducts.topProductsItems.length === 0
        ? dispatch(getTopProducts())
        : null)();
    (() =>
      store.allCategory.allCategoryItems.length === 0
        ? dispatch(getAllCategory())
        : null)();
    let authData = JSON.parse(localStorage.getItem("authData") || "{}");
    dispatch({ type: GET_AUTH_SUCCESS, peload: authData });
  }, [
    dispatch,
    store.allCategory.allCategoryItems.length,
    store.topProducts.topProductsItems.length,
  ]);

  return (
    <Box sx={{ backgroundColor: "background.primary" }}>
      <SimpleSlider data={store.topProducts} />
      <Categories data={store.allCategory} />
      <FeaturedProducts data={store.topProducts} />
      <TopRateProducts data={store.topProducts} />
    </Box>
  );
}
