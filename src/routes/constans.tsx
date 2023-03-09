import { ReactNode } from "react";
import PageOne from "../pages/PageOne";
import PageThree from "../pages/PageThree";
import PageTwo from "../pages/PageTwo";

export interface RouterItem {
  path: string;
  element: ReactNode;
  label: string;
  withAuthorization: boolean;
}

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
