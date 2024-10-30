import SignInForm from "@/components/Forms/SignInForm";
import useTranslation from "@/hooks/useTranslation";
import { pagesTranslations } from "@/types/props";
import { Link } from "react-router-dom";

export default function Signin() {
  const { t, generics } = useTranslation(pagesTranslations.signIn);

  return (
    <div>
      <main className="my-4 px-4 sm:px-4 md:px-16">
        <section className="flex flex-col gap-y-5 max-w-[50ch] m-auto md:border-2 md:p-7 md:rounded-md">
          <h1 className="font-black text-6xl text-center">{t("title")}</h1>
          <img
            src="https://www.katywang.co.uk/img/misc/stickers/chameleons-boil-500px.gif"
            alt=""
            width={20}
            height={20}
            className="w-2/4 h-auto mx-auto"
          />
          <SignInForm />
          <div>
            <Link
              to="/forgot"
              className="link link-info items-center justify-center flex"
            >
              {t("forgotPassword")}
            </Link>
            <div className="divider" />
            <Link to="auth/signup" className="btn w-full">
              {generics("signUp")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
