import {
  authAndProfileDataType,
  cartItem,
  postLoginDataType,
  postSignupDataType,
} from "../../Types/authTypes/authType";
import {
  GET_AUTH_START,
  GET_AUTH_SUCCESS,
  GET_AUTH_END,
  GET_AUTH_FAILD,
  LOG_OUT,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_END,
  GET_PROFILE_FAILD,
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_END,
  EDIT_PROFILE_FAILD,
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_END,
  ADD_CART_ITEM_FAILD,
  DELEATE_CART_ITEM_START,
  DELEATE_CART_ITEM_SUCCESS,
  DELEATE_CART_ITEM_END,
  DELEATE_CART_ITEM_FAILD,
} from "./auth&profileTypes";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import Axios from "../../api/api";

// login
export const login = (dat: postLoginDataType) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_AUTH_START });
    const { data } = await Axios.post("/users/login", dat);
    localStorage.setItem("authData", JSON.stringify(data));
    dispatch({ type: GET_AUTH_SUCCESS, peload: data });
    dispatch({ type: GET_AUTH_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_AUTH_FAILD, peload: error });
    dispatch({ type: GET_AUTH_END });
  }
};

// signup
export const signup =
  (dat: postSignupDataType) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_AUTH_START });
      const { data } = await Axios.post("/users/signup", dat);
      localStorage.setItem("authData", JSON.stringify(data));
      console.log(data, dat);
      dispatch({ type: GET_AUTH_SUCCESS, peload: data });
      dispatch({ type: GET_AUTH_END });
    } catch (error: any) {
      toast.error(`${error}`);
      dispatch({ type: GET_AUTH_FAILD, peload: error });
      dispatch({ type: GET_AUTH_END });
    }
  };

// logout
export const logout = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_AUTH_START });
    dispatch({ type: LOG_OUT });
    localStorage.removeItem("authData");
    dispatch({ type: GET_AUTH_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_AUTH_FAILD, peload: error });
    dispatch({ type: GET_AUTH_END });
  }
};

// get profile
export const getProfile = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_START });
    const { data } = await Axios.get("users/profile");
    dispatch({ type: GET_PROFILE_SUCCESS, data: data });
    dispatch({ type: GET_AUTH_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: GET_PROFILE_FAILD, peload: error });
    dispatch({ type: GET_PROFILE_END });
  }
};

// edit profile
export const editProfile =
  (dat: authAndProfileDataType) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: EDIT_PROFILE_START });
      const { data } = await Axios.put("users/profile", dat);
      dispatch({ type: EDIT_PROFILE_SUCCESS, data: data });
      dispatch({ type: EDIT_PROFILE_END });
    } catch (error: any) {
      toast.error(`${error}`);
      dispatch({ type: EDIT_PROFILE_FAILD, peload: error });
      dispatch({ type: EDIT_PROFILE_END });
    }
  };

// add item to card
export const addItemToCard = (dat: cartItem) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_CART_ITEM_START });
    const { data } = await Axios.put("users/profile/cart", dat);
    dispatch({ type: ADD_CART_ITEM_SUCCESS, data: data });
    localStorage.setItem("authData", JSON.stringify(data));
    dispatch({ type: EDIT_PROFILE_END });
  } catch (error: any) {
    toast.error(`${error}`);
    dispatch({ type: ADD_CART_ITEM_FAILD, peload: error });
    dispatch({ type: ADD_CART_ITEM_END });
  }
};

// delete item from card
export const deleteItemFromCard =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: DELEATE_CART_ITEM_START });
      const { data } = await Axios.delet("users/profile/cart", {
        params: { productId: id },
      });
      dispatch({ type: DELEATE_CART_ITEM_SUCCESS, data: data });
      localStorage.setItem("authData", JSON.stringify(data));
      dispatch({ type: DELEATE_CART_ITEM_END });
    } catch (error: any) {
      toast.error(`${error}`);
      dispatch({ type: DELEATE_CART_ITEM_FAILD, peload: error });
      dispatch({ type: DELEATE_CART_ITEM_END });
    }
  };
