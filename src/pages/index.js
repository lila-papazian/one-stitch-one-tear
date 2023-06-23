import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../css/styles.css";
import "../i18n";
import { useTranslation, Trans } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";

const lngs = {
  en: { nativeName: "EN" },
  es: { nativeName: "ES" },
};
const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const scrollToId = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <main>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid justify-content-end">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-center w-100">
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("synopsis")}
                >
                  {t("Synopsis")}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("trailer")}
                >
                  {t("Trailer")}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("behindTheScene")}
                >
                  {t("Behind the scenes")}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("gallery")}
                >
                  {t("Gallery")}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("documentalMaterial")}
                >
                  {t("Documental material")}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("credits")}
                >
                  {t("Credits")}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToId("pressKit")}
                >
                  {t("Press kit")}
                </a>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center">
              <button
                className="nav-link"
                key={"en"}
                style={{
                  fontWeight:
                    i18n.resolvedLanguage === "en" ? "bold" : "normal",
                  paddingRight: "0.5em",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage("en")}
              >
                {lngs["en"].nativeName}
              </button>
              |
              <button
                className="nav-link"
                key={"es"}
                style={{
                  fontWeight:
                    i18n.resolvedLanguage === "es" ? "bold" : "normal",
                  paddingLeft: "0.5em",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage("es")}
              >
                {lngs["es"].nativeName}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div class="container-fluid">
        <StaticImage
          src="../images/web-title.jpg"
          layout="full-width"
          height={1000}
        />
        <section id="synopsis" className="section-spacing">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-3">
              <h3 className="title-spacing text-center">{t("Synopsis")}</h3>
            </div>
          </div>
          <div class="row align-items-center justify-content-start">
            <div class="col">
              <Trans i18nKey="Synopsis Text"></Trans>
            </div>
          </div>
        </section>

        <section className="section-spacing" id="trailer">
          <div class="row align-items-center justify-content-center">
            <div class="col">
              <h3 className="title-spacing text-center">{t("Trailer")}</h3>
            </div>
          </div>

          <div
            style={{
              paddingBottom: "56.25%",
              maxWidth: "100%",
              position: "relative",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/837609597?title=0#t=0s"
              width="800px"
              height="450px"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder={0}
            />
          </div>
        </section>

        <section
          className="centered-section section-spacing"
          id="behindTheScene"
        >
          <div class="container-fluid">
            <h3 className="title-spacing text-center">
              {t("Behind the scenes")}
            </h3>
            <div class="row align-items-center justify-content-center">
              <div class="col-sm-12 col-md-4">
                <StaticImage
                  src="../images/making/making-03.jpg"
                  layout="full-width"
                />
              </div>
              <div class="col-sm-12 col-md-4">
                <StaticImage
                  src="../images/making/making-04.jpg"
                  layout="full-width"
                />
              </div>
              <div class="col-sm-12 col-md-4">
                <StaticImage
                  src="../images/making/making-02.jpg"
                  layout="full-width"
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing w-75 m-auto" id="gallery">
          <div class="row align-items-center justify-content-center">
            <div class="col">
              <h3 className="title-spacing text-center">{t("Gallery")}</h3>
            </div>
          </div>
          <Carousel indicators={false}>
            <Carousel.Item>
              <StaticImage
                src="../images/carousel/SEC GALLERA-T01web.jpg"
                className="d-block w-100"
                layout="full-width"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../images/carousel/SEC GALLERA-T02web.jpg"
                className="d-block w-100"
                layout="full-width"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../images/carousel/SEC GALLERA-T03web.jpg"
                className="d-block w-100"
                layout="full-width"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../images/carousel/SEC GALLERA-T05web.jpg"
                className="d-block w-100"
                layout="full-width"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../images/carousel/SEC GALLERA-T07web.jpg"
                className="d-block w-100"
                layout="full-width"
              />
            </Carousel.Item>
          </Carousel>
        </section>
        <section className="section-spacing" id="documentalMaterial">
          <div class="row align-items-center justify-content-center">
            <div class="col-sm-12">
              <h3 className="title-spacing text-center">
                {t("Documental material")}
              </h3>
            </div>
          </div>

          <div class="row align-items-center justify-content-center">
            <div class="col-sm-12 col-md-4">
              <StaticImage src="../images/desplazamiento.png" />
              <p className="text-center">{t('Displacement')} 161x105 cm</p>
            </div>
            <div class="col-sm-12 col-md-4">
              <StaticImage src="../images/origen-del-desplazamiento.png" />
              <p className="text-center">
                {t("Displacement origin")} 170x104 cm
              </p>
            </div>
          </div>
          <div class="row align-items-center justify-content-center">
            <div>
              <p>
               <Trans i18nKey="Description" />
              </p>
            </div>
          </div>
        </section>
        <section className="section-spacing" id="credits">
          <div class="row align-items-center justify-content-center">
            <div class="col">
              <h3 className="title-spacing text-center">{t("Credits")}</h3>
            </div>
          </div>
          <div className="row align-items-start justify-content-center">
            <div className="col-md-6">
              <p>
               <Trans i18nKey="Credits first column" />
              </p>
            </div>
            <div className="col-md-6">
              <p>
               <Trans i18nKey="Credits second column" />
              </p>
            </div>
          </div>
        </section>
        <section className="section-spacing" id="pressKit">
          <div class="row align-items-center justify-content-center">
            <h3 className="title-spacing text-center">{t("Press kit")}</h3>
            <a
              href="https://drive.google.com/drive/folders/1sVLUjVBW7Tzw8p_L43L-Jdn-TamA4MVi?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <FontAwesomeIcon
                icon={faDownload}
                size="2xl"
                style={{ color: "#2E333F" }}
              />
            </a>
          </div>
        </section>
      </div>

      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width={30} height={24}>
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              Una puntada, una lágrima. 2023
            </span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>{t('Name')}</title>;
