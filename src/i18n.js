import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Name: 'One stitch, one tear',
      Synopsis: "Synopsis",
      Trailer: "Trailer",
      "Behind the scenes": "Behind the scenes",
      Credits: "Credits",
      "Press kit": "Press kit",
      Gallery: "Gallery",
      "Synopsis Text":
        "Year 2000, a town in Montes de María, Colombia, is accused of collaborating with a guerrilla group, and suffers an incursion by paramilitaries, in which they carry out massacres, and produce a massive displacement of hundreds of families. <br /> In the midst of it all, a group of women, the Mampuján Weavers, make tapestries as trauma therapy, memory reconstruction and commitment to peace.",
      "Documental material": "Documental material",
      Displacement: "Displacement",
      "Displacement origin": "Displacement origin",
      Description:
        "Original tapestries. Weavers of Mampuján 2009 <br /> Embroidered in fabric, <br /> Courtesy of the Meeting Points Foundation <br /> Externado de Colombia University",
      "Credits first column":
        "GENERAL DIRECTOR Isabel Macias <br />ORIGINAL IDEA, RESEARCH AND DOCUMENTARY MAKING Carlos Castro Macea <br /> SCREENPLAY Luz Marquez, Valentina Cayetano Kelly<br /> GENERAL PRODUCTION Loana Ferrero <br /> WEAVER MAMPUJAN Janiris Pulido, Juana Ruiz Hernández <br /> ANIMATION Walter Guarracino <br /> SOUND DESIGN AND POST-PRODUCTION Alejandro Biko Gunkel <br /> ORIGINAL MUSIC, VOICES AND DRUMS Catalina Gutierrez, Ezequiel Silva, Diego Noscue<br /> RECORDING Eliana Cogliati <br /> ART DIRECTION AND DIRECTION GENERAL Isabel Macias <br />",
      "Credits second column":
        "MAKING PUPETS Malenca Felce, Loana Ferrero <br /> REALIZATION OF PROPS Malenca Felce <br /> ASSISTANCE OF DIRECTIONAL Victoria Esplugas <br /> ASSISTANCE TRANSCRIPT Diana Papazian<br /> INTERVIEW Mesa BLU with Vanessa de la Torre - Blu Radio <br /> COMPOSITION ASSISTANCE Sofia Gatti, Lucho Tortolini, Agustín Gibert, Mauro Duarte <br /> COLOR CORRECTION Nadia Amorena <br /> WEB DESIGN Lila Papazian",
    },
  },
  es: {
    translation: {
      Name: "Una puntada, una lágrima",
      Synopsis: "Sinopsis",
      Trailer: "Tráiler",
      "Behind the scenes": "Detrás de escena",
      Credits: "Créditos",
      "Press kit": "Kit de prensa",
      Gallery: "Galería",
      "Synopsis Text":
        "Año 2000, un pueblo en Montes de María, Colombia, es acusado de colaborar con un grupo guerrillero, y sufre una incursión de los paramilitares, en la que realizan masacres, y producen un desplazamiento masivo de cientos de familias. <br /> En medio de todo, un colectivo de mujeres, las Tejedoras de Mampuján, realizan tapices como terapia al trauma, reconstrucción de la memoria y apuesta por la paz.",
      "Documental material": "Material documental",
      Displacement: "Desplazamiento",
      "Displacement origin": "Origen del desplazamiento",
      Description:
        "Tapices originales Tejedoras de Mampuján 2009 <br /> Bordado en tela <br /> Cortesía Fundación Puntos de Encuentro <br /> Universidad Externado de Colombia",
      "Credits first column":
        " DIRECCIÓN GENERAL Isabel Macias <br />IDEA ORIGINAL, INVESTIGACIÓN Y REALIZACIÓN DOCUMENTAL Carlos Castro Macea <br /> GUIÓN Luz Marquez, Valentina Cayetano Kelly <br /> PRODUCCIÓN GENERAL Loana Ferrero <br /> TEJEDORAS DE MAMPUJAN Janiris Pulido, Juana Ruiz Hernández <br /> ANIMACIÓN Walter Guarracino <br /> DISEÑO Y POSTPRODUCCIÓN SONORA Alejandro Biko Gunkel <br /> MÚSICA ORIGINAL, VOCES Y TAMBORES Catalina Gutierrez, Ezequiel Silva, Diego Noscué <br /> GRABACIÓN Eliana Cogliati <br /> DIRECCIÓN DE ARTE Y REALIZACIÓN GENERAL Isabel Macias <br />",
      "Credits second column":
        "REALIZACIÓN DE PUPETS Malenca Felce, Loana Ferrero <br /> REALIZACIÓN DE PROPS Malenca Felce <br /> ASISTENCIA DE REALIZACIÓN Victoria Esplugas <br /> ASISTENCIA TRANSCRIPCIÓN Diana Papazian <br /> ENTREVISTA Mesa BLU con Vanessa de la Torre - Blu Radio <br /> ASISTENCIA DE COMPOSICIÓN Sofia Gatti, Lucho Tortolini, Agustín Gibert, Mauro Duarte <br /> CORRECCIÓN DE COLOR Nadia Amorena <br /> DISEÑO WEB Lila Papazian",
    },
  },
};

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
