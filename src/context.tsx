import React, { createContext, useState, ReactNode, useContext, FC } from 'react';

// Define a type for the context value
type RouterContextType = {
  currentURL: URL;
  setCurrentURL: React.Dispatch<React.SetStateAction<URL>>;
};

const RouterContext = createContext<RouterContextType | null>(null);



// Define props type for RouterProvider
type RouterProviderProps = {
  children: ReactNode;
};

const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));
  
  const value: RouterContextType = {
    currentURL,
    setCurrentURL,
  };
  
  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};

function useRouterContext() {
  const context = useContext(RouterContext);
  if (context === null) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}


export { RouterContext, RouterProvider, useRouterContext };
