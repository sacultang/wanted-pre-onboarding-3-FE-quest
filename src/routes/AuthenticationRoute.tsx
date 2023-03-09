import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import { RouterItem, RouterInfo } from "./constans";
import Authorization from "../hoc/Authorization";

const AuthenticationRoute = createBrowserRouter(
  RouterInfo.map((routerInfo: RouterItem) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: (
            <Authorization currentPath={routerInfo.path}>
              {routerInfo.element}
            </Authorization>
          ),
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
        };
  })
);

export default AuthenticationRoute;
