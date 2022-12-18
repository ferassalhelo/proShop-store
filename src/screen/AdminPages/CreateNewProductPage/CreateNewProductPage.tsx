import { Screen } from "../../screens.style";
import { Box, Grid } from "@mui/material";
import Input from "../../../components/FormItems/Input/Input";
import { ErrorMessage, Form, Formik } from "formik";
import Button from "../../../components/Button/Button";
import UploadProductImages from "../../../components/UploadProductImages/UploadProductImages";
import SelectBox from "../../../components/FormItems/SelectBox/SelectBox";
import { useState } from "react";
import { CreateNewProductPageShema } from "../../../Helper/validation";
import {
  productCategoryOption,
  productColorsOption,
} from "../../../components/FormItems/data";
import {
  ContentBox,
  ContentTitle,
  FiledTitle,
  PageTitle,
  ValedationBox,
} from "./CreateNewProductPage.style";
import { useTranslation } from "react-i18next";

interface selecsAndImagesValues {
  categories: string[];
  colors: string[];
  images: { data_url: string }[];
}

export default function CreateNewProductPage() {
  const [t] = useTranslation();
  let [valedation, setValedation] = useState(false);
  let [selecsAndImagesValues, setselecsAndImagesValues] =
    useState<selecsAndImagesValues>({
      categories: [],
      colors: [],
      images: [],
    });

  const handleImages = (imageList: []) => {
    let init = { ...selecsAndImagesValues };
    init.images = imageList;
    setselecsAndImagesValues(init);
  };

  let handleColors = (e: [{ value: string }]) => {
    let init = { ...selecsAndImagesValues };
    let result = e.map((item) => item.value);
    init.colors = result;
    setselecsAndImagesValues(init);
  };

  let handleCategories = (e: [{ value: string }]) => {
    let init = { ...selecsAndImagesValues };
    let result = e.map((item) => item.value);
    init.categories = result;
    setselecsAndImagesValues(init);
  };

  return (
    <Screen>
      <Formik
        initialValues={{
          name: "",
          brand: "",
          description: "",
          countInStock: "",
          price: "",
          discount: "",
        }}
        onSubmit={(values) => {
          setValedation(true);
          if (
            selecsAndImagesValues.categories.length > 0 &&
            selecsAndImagesValues.colors.length > 0 &&
            selecsAndImagesValues.images.length > 0
          )
            console.log({ ...values, ...selecsAndImagesValues });
          // dispatch(signInAction(values));
        }}
        validationSchema={CreateNewProductPageShema}
      >
        <Form>
          <PageTitle variant="h4">{t("createNewProduct")}</PageTitle>
          <ContentBox>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} sm={3.7}>
                <UploadProductImages
                  handleImages={handleImages}
                  value={selecsAndImagesValues.images}
                />
                <ValedationBox>
                  {selecsAndImagesValues.images.length === 0 &&
                    valedation === true
                    ? "*one Image at least is required"
                    : null}
                </ValedationBox>
              </Grid>
              <Grid item xs={12} sm={7.7}>
                <ContentTitle variant="h4">{t("productDetails")}</ContentTitle>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={5.5}>
                    <FiledTitle variant="h5">{t("productName")}</FiledTitle>
                    <Input name="name" />
                    <ValedationBox>
                      <ErrorMessage name="name" />
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <FiledTitle variant="h5">{t("productBrand")}</FiledTitle>
                    <Input name="brand" />
                    <ValedationBox>
                      <ErrorMessage name="brand" />
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <FiledTitle variant="h5">{t("productCategory")}</FiledTitle>
                    <SelectBox
                      options={productColorsOption}
                      handleValues={handleCategories}
                    />
                    <ValedationBox>
                      {selecsAndImagesValues.categories.length === 0 &&
                        valedation === true
                        ? "*Category is required"
                        : null}
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <FiledTitle variant="h5">{t("productColors")}</FiledTitle>
                    <SelectBox
                      options={productCategoryOption}
                      handleValues={handleColors}
                    />
                    <ValedationBox>
                      {selecsAndImagesValues.colors.length === 0 &&
                        valedation === true
                        ? "*Colors is required"
                        : null}
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12}>
                    <FiledTitle variant="h5">
                      {t("productDescription")}
                    </FiledTitle>
                    <Input
                      // component={"textarea"}
                      width="100%"
                      height="80px !important"
                      name="description"
                    />
                    <ValedationBox>
                      <ErrorMessage name="description" />
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12} md={3.7}>
                    <FiledTitle variant="h5">{t("countInStock")}</FiledTitle>
                    <Input name="countInStock" type="number" />
                    <ValedationBox>
                      <ErrorMessage name="countInStock" />
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12} md={3.7}>
                    <FiledTitle variant="h5">{t("productPrice")}</FiledTitle>
                    <Input name="price" type="number" />
                    <ValedationBox>
                      <ErrorMessage name="price" />
                    </ValedationBox>
                  </Grid>
                  <Grid item xs={12} md={3.7}>
                    <FiledTitle variant="h5">{t("productDiscount")}</FiledTitle>
                    <Input name="discount" type="number" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ContentBox>
          <Box textAlign="end">
            <Button
              width="270px"
              minHeight="60px"
              marginTop="30px"
              type="submit"
            >
              {t("createNewProduct")}
            </Button>
          </Box>
        </Form>
      </Formik>
    </Screen>
  );
}
