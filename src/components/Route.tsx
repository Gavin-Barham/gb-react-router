import React, { ReactNode } from 'react';
import { useRouterContext } from '../context';

interface RouteProps {
  children?: ReactNode;
  path: string;
  component?: () => ReactNode;
}

const Route: React.FC<RouteProps> = ({ children, path, component }) => {
  if (!children && !component) {
    throw new Error('Route must have either "children" or "component" props');
  }

  const childComponents = component ? component() : children;
  const { currentURL } = useRouterContext();
  if (currentURL.pathname === path) {
    return <>{childComponents}</>;
  } else return null;
};

export default Route;
