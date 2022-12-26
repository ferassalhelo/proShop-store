import {
  GET_AUTH_END,
  GET_AUTH_FAILD,
  GET_AUTH_START,
  GET_AUTH_SUCCESS,
  LOG_OUT,
} from "./auth&profileTypes";
import { reduxActionType } from "../../Types/reduxActionsType";
import { authStateType } from "../../Types/authTypes/authType";

export const authReducer = (
  state: authStateType = { authProccess: false, errorAuth: "", data: {} },
  action: reduxActionType
) => {
  switch (action.type) {
    case GET_AUTH_START:
      let newState = { ...state };
      newState.authProccess = true;
      return (state = newState);
    case GET_AUTH_END:
      let newState1 = { ...state };
      newState1.authProccess = false;
      return (state = newState1);
    case GET_AUTH_SUCCESS:
      let newState2 = { ...state };
      newState2.data = action.peload;
      return (state = newState2);
    case GET_AUTH_FAILD:
      let newState3 = { ...state };
      newState3.errorAuth = action.peload;
      return (state = newState3);
    case LOG_OUT:
      let newState4 = { ...state };
      newState4.data = {};
      return (state = newState4);
    default:
      return state;
  }
};
