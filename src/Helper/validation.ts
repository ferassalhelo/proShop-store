import * as Yup from "yup";

export const productDataSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short!")
    .max(30, "*Too Long!")
    .required("*name is required"),
  price: Yup.number()
    .min(1, "Must be more than 0")
    .required("*price is required"),
  description: Yup.string()
    .min(20)
    .max(1000, "too long!")
    .required("*description number is required"),
  allergens: Yup.string(),
  category: Yup.string().required(),
});

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "*Too Short!")
    .max(70, "*Too Long!")
    .required("*First name is required"),
  lastName: Yup.string()
    .min(2, "*Too Short!")
    .max(70, "*Too Long!")
    .required("*Last name is required"),
  email: Yup.string().email("*Invalid email").required("*Email is required"),
  password: Yup.string()
    .required("*Password is required")
    .min(8, "*Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "*Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .required("*Confirm password is required")
    .oneOf([Yup.ref("password"), null], "*Passwords must match"),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("*Invalid email").required("*Email is required"),
  password: Yup.string()
    .required("*Password is required")
    .min(8, "*Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "*At least one uppercase letter, one lowercase letter, and one special character and one number."
    ),
});

export const CreateNewProductPageShema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short! - should be 2 chars minimum.")
    .max(70, "*Too Long!")
    .required("*Product name is required"),
  brand: Yup.string()
    .min(2, "*Too Short! - should be 2 chars minimum.")
    .max(70, "*Too Long!")
    .required("*Brand is required"),
  description: Yup.string()
    .min(10, "*Too Short! - should be 10 chars minimum.")
    .max(900, "*Too Long!")
    .required("*Description name is required"),
  countInStock: Yup.number()
    .min(1, "*Must be more than 0")
    .required("*price is required"),
  price: Yup.number()
    .min(1, "*Must be more than 0")
    .required("*price is required"),
});
