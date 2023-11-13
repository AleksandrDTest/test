import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Logo } from "../entities";
import { StyledThemeProvider } from "./StyledThemeProvider";

describe("Тест Logo", () => {
  const inputTestId = "adsfewr3rfdsdsf4rt";
  test("Тестирование свойств", () => {
    beforeEach(() => {
      render(
        <StyledThemeProvider>
          <Logo
            data-testid={inputTestId}
            title={"cat"}
            subTitle={"currencies academic terms"}
          />
        </StyledThemeProvider>
      );
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("Текст отображается", () => {
      expect(screen.getAllByText(/cat/i)).toBeDefined();
      expect(screen.getAllByText(/currencies academic terms/i)).toBeDefined();
    });
  });
});
