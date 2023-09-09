import React from "react";
import { useRouterContext } from "../context";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const Link: React.FC<LinkProps> = ({ children, to }) => {
  const { setCurrentURL } = useRouterContext();

  function handleNavigation() {
    const newURL = new URL(window.location.origin + to);
    setCurrentURL(newURL);
    history.pushState({}, "", newURL.toString());
  }

  return <a onClick={handleNavigation}>{children}</a>;
};

export default Link;
export type { LinkProps };
