import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import useTranslation from "@/hooks/useTranslation";
import { pagesTranslations } from "@/types/props";

export default function ErrorComponent() {
  const { t } = useTranslation(pagesTranslations.error);
  return (
    <>
      <Navbar />
      <main className="w-full py-4 px-2 sm:h-[calc(100%-4.5rem)] flex flex-col justify-center items-center gap-2 sm:gap-8 text-pretty">
        <h1 className="font-black text-5xl sm:text-6xl">{t("title")}</h1>
        <img
          src="https://www.katywang.co.uk/img/misc/stickers/baby-bear.gif"
          alt=""
          height={350}
          width={350}
          className="w-72 sm:w-96"
        />
        <p className="font-bold text-lg sm:text-2xl">{t("message")}</p>
        <Link to={"/"} className="btn">
          {t("goToHome")}
        </Link>
      </main>
    </>
  );
}
