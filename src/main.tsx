import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProviderContext } from "./context/ThemeContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </UserProvider>
  </StrictMode>
);
