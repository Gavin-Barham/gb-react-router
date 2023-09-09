import React, { ReactNode } from 'react';
import { useRouterContext } from '../context';

interface RouteProps {
  children?: ReactNode | undefined;
  path: string;
  component?: () => ReactNode | undefined;
  element?: ReactNode | undefined;
}

const Route: React.FC<RouteProps> = ({ children=undefined, path, component=undefined, element=undefined }) => {
  if (children && component && children) {
    throw new Error ('Route only accepts one (children, or component or element) not all three')
  }
  else if (children && component) {
    throw new Error ('Route only accepts one (children, or component not both')
  }
  else if (element && component) {
    throw new Error ('Route only accepts one (component, or element not both')
  }
  else if (element && children) {
    throw new Error ('Route only accepts one (element, or children not both')
  }
  else if (!children && !component && !element) {
    throw new Error('Route must have either "children" or "component" or "element prop');
  }

  const childComponents = component ? component() : element ? element : children;
  const { currentURL } = useRouterContext();

  if (currentURL.pathname === path) {
    return (
      <>
        {childComponents}
      </>
    );
  } else return null;
};

export default Route;
export type { RouteProps};
