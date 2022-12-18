import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Counter from "../../../components/Counter/Counter";
import ImgesProduct from "../../../components/ImgsProduct/ImgesProduct";
import ProductColors from "../../../components/ProductOptions/ProductOptions";
import ProductReview from "../../../components/ProductReview/ProducReview";
import FeaturedProducts from "../../../components/Sliders/FeaturedProducts/FeaturedProducts";
import { getProduct } from "../../../redux/products/productsActions";
import { Screen } from "../../screens.style";
import { DitailsBox, ImgBox } from "./ProductPage.style";

export default function ProductPage() {
  const store = useSelector((state: any) => state.products);
  console.log(store.topProducts);
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const [t] = useTranslation();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <Screen>
      <Breadcrumbs lable="feras" />
      <Grid container mt="50px">
        <ImgBox item xs={12} md={5} lg={4}>
          <ImgesProduct />
        </ImgBox>
        <Grid item xs={12} md={7} lg={8} justifyContent="space-between">
          <DitailsBox container>
            <Typography fontWeight="bold" variant="h5" color="text.primary">
              Apple Airpods Wireless Bluetooth Headset
            </Typography>
            <Box textAlign="end">
              <Typography fontWeight="bold" variant="h5" color="text.secondary">
                $99.99
              </Typography>
              <Typography
                fontWeight="bold"
                variant="h6"
                color="background.paper"
              >
                30% {t("sale")}
              </Typography>
              <Typography fontWeight="bold" variant="h4" color="text.primary">
                $89.99
              </Typography>
            </Box>
          </DitailsBox>
          <Box maxWidth="350px">
            <Counter />
          </Box>
          <ProductColors colors={["red", "black", "yellow"]} />
          <ProductColors sizes={["red", "black", "yellow"]} />
          <Typography color="text.primary" mt="35px">
            Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex
            enim aperiam consequatur. Est temporibus ab. Pariatur aut ut
            temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis
            consequuntur non sunt et neque. Aut dolorem repellat quo architecto
            sint minima doloremque. At quae laborum incidunt vel voluptas dolor
            similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus
            dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates
            a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis
            laborum consequuntur sint porro omnis et facere. Voluptatem vitae
            quo. Similique atque cumque culpa temporibus consequatur
            voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et
            qui consequatur aut. Eum consequuntur necessitatibus veritatis
            voluptatem qui velit repellat numquam tempore. Qui quam eos modi.
            Libero corporis ut et. Eligendi est expedita aspernatur non
            repellendus nihil perferendis. Et deserunt doloremque esse. Iusto
            veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut
            sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae
            magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati
            temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore
            assumenda. Aut doloribus unde repellat pariatur consequatur.
            Blanditiis voluptas aut tempora facilis fugi.
          </Typography>
        </Grid>
      </Grid>
      <Typography fontWeight="bold" variant="h4" color="text.primary" my="30px">
        {t("reviews")}
      </Typography>
      <Box border="1px solid" borderColor="background.secondary" p="30px 3vw">
        <ProductReview name="feras" date="45/78/9099" rate="4" text="lhkgfgg" />
      </Box>
      <FeaturedProducts data={store.topProducts} />
    </Screen>
  );
}
