import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from "../shared/ui";
import { StyledThemeProvider } from "./StyledThemeProvider";

describe("Тест Title", () => {
  const inputTestId = "adsfewr3rfdsdsf4rt";
  test("Тестирование свойств", () => {
    beforeEach(() => {
      render(
        <StyledThemeProvider>
          <Title data-testid={inputTestId} children={"Afghan Afghani}"} />
        </StyledThemeProvider>
      );
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("Текст отображается", () => {
      expect(screen.getAllByText(/Afghan Afghani/i)).toBeDefined();
    });
  });
});
