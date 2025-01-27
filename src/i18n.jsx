import i18n from "i18next"; // Assuming you're using i18next
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import kz from "./locales/kz.json";
import ru from "./locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kz: { translation: kz },
    ru: { translation: ru },
  },
  lng: "kz", // default language
  fallbackLng: "kz",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
