import { Grid, Typography, Box, Divider } from "@mui/material";
import { Screen } from "../../screens.style";
import { Formik, Form, ErrorMessage } from "formik";
import { SignupSchema } from "../../../Helper/validation";
import Button from "../../../components/Button/Button";
import Input from "../../../components/FormItems/Input/Input";
import Img from "../../../components/Img/Img";
import img from "../../../assets/imges/SignUp.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/auth&profile/auth&profileActions";

export default function SignupPage() {
  const signUpProccess = useSelector((state: any) => state.auth.authProccess);
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
        <Grid sx={{ order: { md: 9999 } }} item sm={12} md={6} xl={7}>
          <Img src={img} />
        </Grid>
        <Grid item sm={12} md={5} xl={3} sx={{ order: { md: 1 } }}>
          <Typography variant="h2" color="text.primary" fontWeight="bold">
            {t("signup")}
          </Typography>
          <Typography color="text.secondary" variant="h4" py="15px">
            {t("signUpInformation")}
          </Typography>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            onSubmit={(values) => {
              dispatch(signup(values));
            }}
            validationSchema={SignupSchema}
          >
            <Form>
              <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                {t("firstName")}
              </Typography>
              <Input
                name="firstName"
                placeholder={t("yourFirstName")}
                type="text"
              />
              <Box color="red" mt="5px">
                <ErrorMessage name="firstName" />
              </Box>
              <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                {t("lastName")}
              </Typography>
              <Input
                name="lastName"
                placeholder={t("yourLastName")}
                type="text"
              />
              <Box color="red" mt="5px">
                <ErrorMessage name="lastName" />
              </Box>
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
              <Typography color="text.primary" variant="h5" m="35px 0 10px 0">
                {t("confirmPassword")}
              </Typography>
              <Input
                name="passwordConfirmation"
                placeholder="●●●●●●●●"
                type="password"
              />
              <Box color="red" mt="5px">
                <ErrorMessage name="passwordConfirmation" />
              </Box>
              <Button
                loading={signUpProccess}
                type="submit"
                borderRadius="6px"
                margin="30px 0"
              >
                {t("signup")}
              </Button>
              <Divider sx={{ my: "20px" }} />
            </Form>
          </Formik>
          <Typography color="text.secondary" variant="h5">
            {t("haveAccount")}
            <Typography variant="h5" component="span" color="text.primary">
              <Link to="/login"> {t("logIn")}</Link>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Screen>
  );
}
