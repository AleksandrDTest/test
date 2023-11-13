import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { InputSelect } from "../shared/ui";
import { TCurrency } from "../shared/redux/model";
import { StyledThemeProvider } from "./StyledThemeProvider";

describe("Тест InputSelect", () => {
  const mockData: TCurrency[] = [
    { id: "AED", name: "United Arab Emirates Dirham", min_size: 0.01 },
    { id: "AFN", name: "Afghan Afghani", min_size: 0.01 },
    { id: "ALL", name: "Albanian Lek", min_size: 0.01 },
    { id: "AMD", name: "Armenian Dram", min_size: 0.01 },
  ];
  const inputTestId = "adsfewr3rfdsdsf4rt";
  let input: HTMLInputElement;
  test("Тестирование свойств", () => {
    beforeEach(() => {
      render(
        <StyledThemeProvider>
          <InputSelect data-testid={inputTestId} options={mockData} />
        </StyledThemeProvider>
      );
      input = screen.getByTestId(inputTestId);
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("Первое значение по умолчанию", () => {
      expect(input.value).toBe(mockData[0].id);
    });
  });
});
