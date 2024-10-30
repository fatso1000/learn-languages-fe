import useTranslation from "@/hooks/useTranslation";
import SignUpForm from "@/components/Forms/SignupForm";
import { pagesTranslations } from "@/types/props";

export default function SignUp() {
  const { t } = useTranslation(pagesTranslations.signUp);

  return (
    <div>
      <main className="my-4 px-4 sm:px-4 md:px-16">
        <section className="flex flex-col gap-y-5 max-w-[50ch] m-auto md:border-2 md:p-7 md:rounded-md">
          <h1 className="font-black text-6xl text-center">{t("title")}</h1>
          <img
            src="https://www.katywang.co.uk/img/misc/stickers/otter.gif"
            alt=""
            width={20}
            height={20}
            className="w-2/4 h-auto mx-auto"
          />
          <SignUpForm />
        </section>
      </main>
    </div>
  );
}
