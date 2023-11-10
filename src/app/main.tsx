import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { theme, GlobalStyles } from "../shared/theme/index.ts";
import { setupStore } from "./appStore.ts";
import { router } from "./appRouter.tsx";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
