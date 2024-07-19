import { Params, redirect } from "react-router-dom";
import { locales } from "./helpers";
import i18n from "@/i18n";

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
  i18n.changeLanguage(locale);
  return null;
}

export { localeFromBrowser, validateLocale };
