import Home from "@/screens/Home";
import { LoaderFunctionArgs, RouteObject } from "react-router-dom";
import { localeFromBrowser, validateLocale } from "./localeManager";

export const routes: RouteObject[] = [
  {
    path: "/",
    loader: async () => {
      return localeFromBrowser();
    },
    errorElement: <h1>Error jijuepu</h1>,
  },
  {
    path: ":locale",
    lazy: async () => {
      const Home = (await import("@/screens/Home")).default;
      return { Component: Home };
    },
    loader: async ({ params }: LoaderFunctionArgs) => {
      return validateLocale(params);
    },
    children: [{ path: "login", element: <Home /> }],
  },
];
