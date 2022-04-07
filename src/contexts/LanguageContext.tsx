import { createContext, useState } from "react";

interface IContext {
  language: string;
  onLanguageChange: (language: string) => void;
}

const Context = createContext<Partial<IContext>>({});

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
