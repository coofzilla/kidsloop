import { createContext, useState } from "react";

const Context = createContext<any>("");

interface LanguageStoreProps {
  children: React.ReactNode;
}

export const LanguageStore = ({ children }: LanguageStoreProps) => {
  const [language, setLanguage] = useState({ language: "" });

  const onLanguageChange = (language: string) => {
    setLanguage({ language });
  };
  return (
    <Context.Provider value={{ ...language, onLanguageChange }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
