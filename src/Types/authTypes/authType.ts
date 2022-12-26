export interface postLoginDataType {
  email: string;
  password: string;
}

export interface postSignupDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface authAndProfileDataType {
  _id: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  email: string;
  isAdmin: true;
  cart: {};
  token: string;
}

export interface cartItem {
  productId: "string";
  qty: 0;
}

export interface authStateType {
  authProccess: boolean;
  errorAuth: string;
  data: authAndProfileDataType | {};
}
