import { Screen } from "../../screens.style";
import { Typography, Grid, Divider, Box } from "@mui/material";
import Button from "../../../components/Button/Button";
import { ErrorMessage, Form, Formik } from "formik";
import Input from "../../../components/FormItems/Input/Input";
import { useTranslation } from "react-i18next";
import OrderDetails from "../../../components/OrderDetails/OrderDetails";

function CheckoutPage() {
  const [t] = useTranslation();
  return (
    <Screen>
      <Typography variant="h4" fontWeight="bold" py="40px">
        Review Order
      </Typography>
      <Grid container alignItems="center" maxWidth="750px">
        <Button width="40px" borderRadius="0" fontWeight="bold">
          1
        </Button>
        <Typography
          mx="15px"
          variant="h5"
          color="text.primary"
          fontWeight="600"
        >
          Shipping and Payment
        </Typography>
        <Grid item flexGrow="2">
          <Divider sx={{ margin: "0 15px" }} />
        </Grid>
        <Button width="40px" margin="0 20px" borderRadius="0" fontWeight="bold">
          2
        </Button>
        <Typography variant="h5" color="text.primary" fontWeight="600">
          Place an Orders
        </Typography>
      </Grid>
      {/* screen */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="start"
        mt="50px"
      >
        <Grid
          item
          xs={12}
          lg={7.5}
          bgcolor={"background.secondary"}
          p="30px 80px"
          borderRadius="16px"
        >
          <Typography variant="h4" fontWeight="bold" py="15px">
            Shipping Address
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
              remember: false,
            }}
            onSubmit={(values) => {
              // dispatch(signInAction(values));
              console.log(values);
            }}
            //   validationSchema={SigninSchema}
          >
            <Form>
              <Grid container justifyContent="space-between">
                <Grid item xs={12} md={5.5}>
                  <Typography
                    color="text.primary"
                    variant="h5"
                    m="35px 0 10px 0"
                  >
                    Country
                  </Typography>
                  <Input name="email" type="email" />
                  <Box color="red" mt="5px">
                    <ErrorMessage name="email" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Typography
                    color="text.primary"
                    variant="h5"
                    m="35px 0 10px 0"
                  >
                    City
                  </Typography>
                  <Input name="password" type="password" />
                  <Box color="red" mt="5px">
                    <ErrorMessage name="password" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Typography
                    color="text.primary"
                    variant="h5"
                    m="35px 0 10px 0"
                  >
                    Country
                  </Typography>
                  <Input name="email" type="email" />
                  <Box color="red" mt="5px">
                    <ErrorMessage name="email" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Typography
                    color="text.primary"
                    variant="h5"
                    m="35px 0 10px 0"
                  >
                    City
                  </Typography>
                  <Input name="password" type="password" />
                  <Box color="red" mt="5px">
                    <ErrorMessage name="password" />
                  </Box>
                </Grid>
              </Grid>
            </Form>
          </Formik>
          {/* 
                <Typography variant="h4" fontWeight="bold" py="15px">
          Shipping Address
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          onSubmit={(values) => {
            // dispatch(signInAction(values));
            console.log(values);
          }}
          //   validationSchema={SigninSchema}
        >
          <Form>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} md={5.5}>
                <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                  Country
                </Typography>
                <Input name="email" type="email" />
                <Box color="red" mt="5px">
                  <ErrorMessage name="email" />
                </Box>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                  City
                </Typography>
                <Input name="password" type="password" />
                <Box color="red" mt="5px">
                  <ErrorMessage name="password" />
                </Box>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                  Country
                </Typography>
                <Input name="email" type="email" />
                <Box color="red" mt="5px">
                  <ErrorMessage name="email" />
                </Box>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                  City
                </Typography>
                <Input name="password" type="password" />
                <Box color="red" mt="5px">
                  <ErrorMessage name="password" />
                </Box>
              </Grid>
            </Grid>
          </Form>
        </Formik> */}
        </Grid>
        <Grid item xs={12} lg={4}>
          <OrderDetails con />
          <Grid container justifyContent="end">
            <Button width="350px" padding="20px" margin="30px 0">
              Review order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Screen>
  );
}

export default CheckoutPage;
