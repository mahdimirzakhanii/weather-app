import React, { createContext, useContext, useState } from "react";

interface LangType {
  lang: "fa" | "en";
  setLang: (lang: "fa" | "en") => void;
}

const LangContext = createContext<LangType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const storedLang = localStorage.getItem("lang");
  const initialLang: "fa" | "en" =
    storedLang === "fa" || storedLang === "en" ? storedLang : "en";

  const [lang, setLang] = useState<"fa" | "en">(initialLang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
export const useLang = (): LangType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("Error in useLang");
  }
  return context;
};
