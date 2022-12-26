import { reduxActionType } from "../../Types/reduxActionsType";
import { TOGLE_THEME } from "./themeTypes";

export const toggelTheme = (): reduxActionType => {
  return { type: TOGLE_THEME };
};
