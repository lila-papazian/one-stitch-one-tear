import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Synopsis: "Synopsis",
      Trailer: "Trailer",
      "Behind the scenes": "Behind the scenes",
      Credits: "Credits",
      "Press kit": "Press kit",
      Gallery: "Gallery",
      "Synopsis Text":
        "Año 2000, un pueblo en Montes de María, Colombia, es acusado de colaborar con un grupo guerrillero, y sufre una incursión de los paramilitares, en la que realizan masacres, y producen un desplazamiento masivo de cientos de familias. <br /> En medio de todo, un colectivo de mujeres, las Tejedoras de Mampuján, realizan tapices como terapia al trauma, reconstrucción de la memoria y apuesta por la paz.",
      "Documental material": "Documental material",
    },
  },
  es: {
    translation: {
      Synopsis: "Sinopsis",
      Trailer: "Tráiler",
      "Behind the scenes": "Detrás de escena",
      Credits: "Créditos",
      "Press kit": "Kit de prensa",
      Gallery: "Galería",
      "Synopsis Text":
        "Año 2000, un pueblo en Montes de María, Colombia, es acusado de colaborar con un grupo guerrillero, y sufre una incursión de los paramilitares, en la que realizan masacres, y producen un desplazamiento masivo de cientos de familias. <br /> En medio de todo, un colectivo de mujeres, las Tejedoras de Mampuján, realizan tapices como terapia al trauma, reconstrucción de la memoria y apuesta por la paz.",
      "Documental material": "Material documental",
    },
  },
};

i18n.languages = ["en", "es"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
