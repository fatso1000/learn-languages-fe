import { pagesTranslations, rootTranslations } from "@/types/props";
import { useTranslation as useI18next } from "react-i18next";
import { useParams } from "react-router-dom";

export default function useTranslation(page?: pagesTranslations) {
  const { t: translation, i18n } = useI18next();

  const { locale } = useParams();
  i18n.changeLanguage(locale);

  const generics = (e: string) => translation(rootTranslations.generics + e);
  const t = (e: string) =>
    translation(rootTranslations.pages + (page ?? "") + e);

  return { t, generics };
}
