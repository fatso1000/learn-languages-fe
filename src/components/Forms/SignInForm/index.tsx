import SubmitButton from "@/components/Inputs/SubmitButton";
import { signInFormValidation } from "src/actions/auth";
import PasswordInput from "@/components/Inputs/PasswordInput";
import FormInput from "@/components/Inputs/FormInput";
import { useEffect, useState } from "react";
import useTranslation from "@/hooks/useTranslation";
import { pagesTranslations } from "@/types/props";
import { Form, Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const { t, generics } = useTranslation(pagesTranslations.signIn);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // if (success) router.push("/");
  }, [success]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center gap-y-5">
          {errors && errors.length > 0 && (
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
                  {errors.map((error: { message: string }) => (
                    <span key={error.message}>
                      <div className="badge badge-error badge-xs mr-2"></div>
                      {error.message}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <FormInput
            label={t("email")}
            type="email"
            required
            name="email"
            id="email"
          />
          <PasswordInput
            label={t("password")}
            placeholder=""
            name="password"
            id="password"
            required
          />
          <SubmitButton
            isLoading={isSubmitting}
            className="btn btn-success w-full"
          >
            {generics("signIn")}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
}
