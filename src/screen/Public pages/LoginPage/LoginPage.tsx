import { Grid, Typography, Box, Divider } from "@mui/material";
import { Screen } from "../../screens.style";
import { Formik, Form, ErrorMessage } from "formik";
import { SigninSchema } from "../../../Helper/validation";
import Button from "../../../components/Button/Button";
import Input from "../../../components/FormItems/Input/Input";
import Img from "../../../components/Img/Img";
import img from "../../../assets/imges/SignIn.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/auth&profile/auth&profileActions";

export default function LoginPage() {
  const loginProccess = useSelector((state: any) => state.auth.authProccess);
  const dispatch = useDispatch();
  const [t] = useTranslation();
  return (
    <Screen>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mt="45px"
      >
        <Grid item sm={12} md={6} xl={6} sx={{ order: { md: 999 } }}>
          <Img src={img} />
        </Grid>
        <Grid item sm={12} md={5} xl={3} sx={{ order: { md: 1 } }}>
          <Typography variant="h2" color="text.primary" fontWeight="bold">
            {t("login")}
          </Typography>
          <Typography color="text.secondary" variant="h4" py="15px">
            {t("loginInformation")}
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              dispatch(login(values));
            }}
            validationSchema={SigninSchema}
          >
            <Form>
              <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                {t("enterEmail")}
              </Typography>
              <Input name="email" placeholder={t("email")} type="email" />
              <Box color="red" mt="5px">
                <ErrorMessage name="email" />
              </Box>
              <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                {t("enterPassword")}
              </Typography>
              <Input name="password" placeholder="●●●●●●●●" type="password" />
              <Box color="red" mt="5px">
                <ErrorMessage name="password" />
              </Box>
              <Button
                loading={loginProccess}
                type="submit"
                borderRadius="6px"
                margin="30px 0"
              >
                {t("logIn")}
              </Button>
              <Box textAlign="center">
                <Divider sx={{ height: "5px", my: "30px" }} />
                <Link to="/signup">
                  <Button
                    variant="outlined"
                    borderRadius="20px"
                    borderWidth="3px"
                    padding="15px"
                    margin="0 0 50px 0"
                    maxWidth="220px"
                  >
                    {t("signIn")}
                  </Button>
                </Link>
              </Box>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Screen>
  );
}
