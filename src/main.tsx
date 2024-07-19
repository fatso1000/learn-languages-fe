import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import "./i18n";
import {routes} from "./shared/routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
