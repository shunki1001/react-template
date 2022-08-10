import { createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const test = "Hello world";

  const value = { test };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
