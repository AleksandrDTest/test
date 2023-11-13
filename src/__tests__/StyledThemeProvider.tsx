import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../shared/theme";
import { FC, ReactNode } from "react";

interface IStyledThemeProvider {
  children: ReactNode;
}

export const StyledThemeProvider: FC<IStyledThemeProvider> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
