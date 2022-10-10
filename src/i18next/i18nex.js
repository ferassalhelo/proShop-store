import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AR from "./languges/ar";
import EN from "./languges/en";
let resources = {
  en: {
    translation: EN,
  },
  ar: {
    translation: AR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
