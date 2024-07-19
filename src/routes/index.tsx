import { localeFromBrowser, validateLocale } from "@/shared/localeManager";
import { LoaderFunctionArgs, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    loader: async () => {
      return localeFromBrowser();
    },

    errorElement: <h1>Error jijuepu</h1>,
  },
  {
    path: ":locale/",
    lazy: async () => {
      const Layout = (await import("@/components/Layout")).default;
      return { Component: Layout };
    },
    loader: async ({ params }: LoaderFunctionArgs) => {
      return validateLocale(params);
    },
    errorElement: <h1>Error jijuepu</h1>,
    children: [
      {
        path: "",
        lazy: async () => {
          const Home = (await import("@/screens/Home")).default;
          return { Component: Home };
        },
        loader: async ({ params }: LoaderFunctionArgs) => {
          return validateLocale(params);
        },
      },
    ],
  },
];
