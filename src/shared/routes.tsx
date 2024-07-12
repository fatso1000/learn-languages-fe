import Home from "@/screens/Home";
import {LoaderFunctionArgs} from "react-router-dom";
import {localeFromBrowser, validateLocale} from "./localeManager";

export const routes = [
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return localeFromBrowser();
    },
  },
  {
    path: ":locale",
    element: <Home />,
    loader: async ({params}: LoaderFunctionArgs) => {
      return validateLocale(params);
    },
  },
];
