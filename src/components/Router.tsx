import React, { useEffect, ReactNode } from "react";
import { useRouterContext } from "../context";

interface RouterProps {
  children: ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  const { setCurrentURL } = useRouterContext();
  useEffect(() => {
    function handlePopstate() {
      setCurrentURL(new URL(window.location.href));
    }
    window.addEventListener("popstate", handlePopstate);

    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  return <>{children}</>;
};

export default Router;
export type { RouterProps };
