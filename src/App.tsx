import { Suspense, useEffect } from "react";
import { CircularProgress, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import "./i18next/i18nex";
import Header from "./components/Header/Header";
import Root from "./routs/Root";
import Itheme from "./theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/products/productsActions";

function App() {
  const dispatch = useDispatch();
  const mode: any = useSelector<PaletteMode>((state) => state);
  const [, i18n] = useTranslation();
  const theme = createTheme(Itheme(mode.theme));
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<CircularProgress />}>
          <BrowserRouter>
            <Header />
            <Root />
          </BrowserRouter>
        </Suspense>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
