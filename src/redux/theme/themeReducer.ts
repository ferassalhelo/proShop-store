import { PaletteMode } from "@mui/material";
import { reduxActionType } from "../../Types/reduxActionsType";
import { TOGLE_THEME } from "./themeTypes";

const themeReducer = (mode: PaletteMode = "light", action: reduxActionType) => {
  switch (action.type) {
    case TOGLE_THEME:
      return mode === "light" ? (mode = "dark") : (mode = "light");

    default:
      return mode;
  }
};

export default themeReducer;
