import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import { RouterItem } from "./constans";
import Authorization from "../hoc/Authorization";

export const RouterInfo: RouterItem[] = [
  {
    path: "/",
    element: <PageOne />,
    label: "홈",
    withAuthorization: true,
  },
  {
    path: "/page2",
    element: <PageTwo />,
    label: "page 2",
    withAuthorization: true,
  },
  {
    path: "/page3",
    element: <PageThree />,
    label: "page 3",
    withAuthorization: false,
  },
];

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
