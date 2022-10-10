import { actionType } from "../../Types/ProductsTypes/actionsType";
import {TOGLE_THEME  } from "./themeTypes";

export const toggelTheme = (): actionType => {
  return { type: TOGLE_THEME };
};
