import { PaletteMode } from "@mui/material";

export interface IType {
  typography: { fontFamily: string };
  palette: {
    mode: PaletteMode | undefined;
    primary: {
      main: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
      variant: string;
      paper: string;
    };
  };
}

let Itheme = (mode: PaletteMode): IType => ({
  typography: { fontFamily: '"Mulish", sans-serif' },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#FCDD06",
          },
          text: {
            primary: "#242424",
            secondary: "#707070",
          },
          background: {
            primary: "#FFFFFF",
            secondary: "#F2F2F2",
            variant: "#F7F8FC",
            paper: "#FC4059",
          },
          action: {
            disabledBackground:'#ffe427',
          }
      
        }
      : {
          primary: {
            main: "#FCDD06",
          },
          text: {
            primary: "#ffffff",
            secondary: "#afafaf",
          },
          background: {
            primary: "#272727",
            secondary: "#4d4d4d",
            variant: "#051820",
            paper: "#FC4059",
          },
        }),
  },
});

export default Itheme;
