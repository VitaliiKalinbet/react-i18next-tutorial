import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "flag-icon-css/css/flag-icon.min.css";

const resources = {
  en: {
    translation: {
      app_title: "Title",
      language: "Language",
      welcome_message: "Welcome",
      days_since_release:
        "it's been {{number_of_days}} days since this video was released",
    },
  },
  ar: {
    translation: {
      app_title: "عنوان",
      language: "اللغة",
      welcome_message: "اهلا بكم",
      days_since_release:
        "لقد مرت {{number_of_days}} أيام على إصدار هذا الفيديو",
    },
  },
  fr: {
    translation: {
      app_title: "Titre",
      language: "Langue",
      welcome_message: "Bienvenue",
      days_since_release:
        "ça fait {{number_of_days}} jours depuis la sortie de cette vidéo",
    },
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    resources: resources,
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
