import SubmitButton from "@/components/Inputs/SubmitButton";
import { signUpFormValidation } from "@/actions/auth";
import PasswordInput from "@/components/Inputs/PasswordInput";
import FormInput from "@/components/Inputs/FormInput";
import LanguageInput from "@/components/Inputs/LanguageInput";
import { Link } from "react-router-dom";
import useTranslation from "@/hooks/useTranslation";
import { Form, Formik } from "formik";
import { pagesTranslations } from "@/types/props";
import i18n from "i18next";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeat_password: "",
  language: [] as string[],
  type: "",
};

export default function SignUpForm() {
  const [selectedLanguageInput, setSelectedLanguageInput] = useState<string[]>(
    []
  );
  const { t, generics } = useTranslation(pagesTranslations.signUp);

  const locale = i18n.language;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(v, f) =>
        signUpFormValidation({ ...v, language: selectedLanguageInput }, f)
      }
    >
      {({ isSubmitting, errors }) => (
        <Form className="flex flex-col items-center gap-y-5">
          {errors && Object.values(errors).length > 0 && (
            <div className="card w-full bg-base-100 border">
              <div className="card-body">
                <h2 className="card-title text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                  Errors list
                </h2>
                <div className="flex flex-col gap-y-1">
                  {Object.values(errors).map((error) => (
                    <span key={typeof error === "string" ? error : error[0]}>
                      <div className="badge badge-error badge-xs mr-2"></div>
                      {error}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <FormInput label={t("name")} type="text" name="name" required />
          <FormInput label={t("email")} type="email" required name="email" />
          <PasswordInput
            name="password"
            label={t("password")}
            minLength={6}
            required
            placeholder=""
          />
          <PasswordInput
            name="repeat_password"
            label={t("repeatPassword")}
            minLength={6}
            placeholder=""
            required
          />
          <LanguageInput
            defaultLanguage={locale}
            smallContainer
            selectedLanguageInput={selectedLanguageInput}
            setSelectedLanguageInput={setSelectedLanguageInput}
          />
          <div className="w-full pt-4">
            <SubmitButton
              isLoading={isSubmitting}
              className="btn btn-success w-full"
            >
              {generics("signUp")}
            </SubmitButton>
            <div className="divider" />
            <Link to="/auth/signin" className="btn w-full">
              {generics("signIn")}
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
