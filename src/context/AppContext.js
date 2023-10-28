import { createContext, useState } from 'react';

const AppContext = createContext();

export default function AppProvider({ children })  {
  const [products, setProducts] = useState([]); 

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};


