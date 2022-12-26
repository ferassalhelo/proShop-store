import { Grid, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Counter from "../../../components/Counter/Counter";
import ImgesProduct from "../../../components/ImgsProduct/ImgesProduct";
import ProductColors from "../../../components/ProductOptions/ProductOptions";
import ProductReview from "../../../components/ProductReview/ProducReview";
import Progress from "../../../components/Progress/Progress";
import FeaturedProducts from "../../../components/Sliders/FeaturedProducts/FeaturedProducts";
import { getProduct } from "../../../redux/products/productsActions";
import ProductType, {
  ReviewType,
} from "../../../Types/ProductsTypes/productType";
import { Screen } from "../../screens.style";
import { DitailsBox, ImgBox } from "./ProductPage.style";

export default function ProductPage() {
  const state = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const [t] = useTranslation();
  let {
    productItem,
    loadingProduct,
  }: { productItem: ProductType; loadingProduct: boolean } = state.product;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);




  return (
    <>
      {loadingProduct || !productItem._id ? (
        <Progress />
      ) : (
        <Screen>
          <Breadcrumbs lable="feras" />
          <Grid container mt="50px">
            <ImgBox item xs={12} md={5} lg={4}>
              <ImgesProduct imges={productItem.images} />
            </ImgBox>
            <Grid item xs={12} md={7} lg={8} justifyContent="space-between">
              <DitailsBox container>
                <Typography fontWeight="bold" variant="h5" color="text.primary">
                  {productItem.name}
                </Typography>
                <Box textAlign="end">
                  <Typography
                    fontWeight="bold"
                    variant="h5"
                    color="text.secondary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {productItem.price}$
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    variant="h6"
                    color="background.paper"
                  >
                    {Math.floor(
                      (100 / +productItem.price) * +productItem.discount
                    )}
                    % {t("sale")}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    variant="h4"
                    color="text.primary"
                  >
                    {productItem.price + -+productItem.discount}$
                  </Typography>
                </Box>
              </DitailsBox>
              <Box maxWidth="350px">
                <Counter />
              </Box>
              <ProductColors colors={productItem.colors} />
              <Typography color="text.primary" mt="35px">
                {productItem.description}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            fontWeight="bold"
            variant="h4"
            color="text.primary"
            my="30px"
          >
            {t("reviews")}
          </Typography>
          <Box
            border="1px solid"
            borderColor="background.secondary"
            p="30px 3vw"
            mb="50px"
          >
            {productItem.reviews.map((item: ReviewType) => (
              <ProductReview data={item} key={item._id} />
            ))}
          </Box>
          <FeaturedProducts data={state.topProducts} />
        </Screen>
      )}
    </>
  );
}
