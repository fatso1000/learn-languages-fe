import { pagesTranslations, rootTranslations } from "@/types/props";
import { useTranslation as useI18next } from "react-i18next";

export default function useTranslation(page?: pagesTranslations) {
  const { t: translation } = useI18next();

  const generics = (e: string) => translation(rootTranslations.generics + e);
  const t = (e: string) =>
    translation(rootTranslations.pages + (page ?? "") + e);

  return { t, generics };
}
