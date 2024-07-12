import {Params, redirect} from "react-router-dom";
import {locales} from "./helpers";

function localeFromBrowser() {
  const localeParams = navigator && navigator.language.slice(0, 2);
  const locale = (locales.includes(localeParams) && localeParams) || "en";
  return redirect(`/${locale}`);
}

function validateLocale(params?: Params<string>) {
  const locale = params?.locale;
  if (!locale || !locales.includes(locale)) {
    return localeFromBrowser();
  }
  return null;
}

export {localeFromBrowser, validateLocale};
