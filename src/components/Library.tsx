import React, { ReactNode } from "react";
import { RouterProvider } from "../context";
import Router from "./Router";
import Route from "./Route";
import Link from "./Link";
import type { LinkProps } from "./Link";

import type { RouteProps } from "./Route";

interface BrowserRouterProps {
  children: ReactNode;
}

const BrowserRouter: React.FC<BrowserRouterProps> = ({ children }) => {
  return (
    <>
      <RouterProvider>
        <Router>{children}</Router>
      </RouterProvider>
    </>
  );
};

export { BrowserRouter, Route, Link };
export type { BrowserRouterProps, RouteProps, LinkProps }
