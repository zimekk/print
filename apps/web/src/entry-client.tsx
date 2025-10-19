import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@dev/web/src/containers/App";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
