import { PaletteMode } from "@mui/material";
import { actionType } from "../../Types/ProductsTypes/actionsType";
import { TOGLE_THEME } from "./themeTypes";

const themeReducer = (mode: PaletteMode = "light", action: actionType) => {
  switch (action.type) {
    case TOGLE_THEME:
      return mode === "light" ? (mode = "dark") : (mode = "light");

    default:
      return mode;
  }
};

export default themeReducer;
