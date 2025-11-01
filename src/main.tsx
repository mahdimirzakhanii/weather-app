import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { ThemeProviderContext } from "./context/ThemeContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { LangProvider } from "./context/LanguageContext.tsx";
import { DataProvider } from "./context/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <DataProvider>
        <LangProvider>
          <ThemeProviderContext>
            <App />
          </ThemeProviderContext>
        </LangProvider>
      </DataProvider>
    </UserProvider>
  </StrictMode>
);
