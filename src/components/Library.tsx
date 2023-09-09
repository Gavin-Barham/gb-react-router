import React, { ReactNode } from "react";
import { RouterProvider } from "../context";
import Router from "./Router";
import Route from "./Route";
import Link from "./Link";

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
