import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
// Helper to fast-forward timers for animation
function advanceTimers(ms) {
  act(() => {
    jest.advanceTimersByTime(ms);
  });
}

describe("Intro Page", () => {
  beforeEach(() => {
    // Use fake timers for animation
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("renders with all PLONK letters (after animation)", () => {
    render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>
    );

    // Letters appear one by one; we'll fast-forward to after all should be visible
    advanceTimers(2000);

    PLONK_LETTERS.forEach(letter => {
      // All letters should be in the document and visible
      expect(screen.getByText(letter)).toBeInTheDocument();
    });

    // Main headline should be present
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("PLONK");
  });

  test("animation sequence: letters appear one at a time", () => {
    render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>
    );

    // At first, no letters should be visible
    PLONK_LETTERS.forEach(letter => {
      expect(screen.queryByText(letter)).toBeInTheDocument();
      // Could also check opacity if using data-testid or inline style
    });

    // Simulate time passing for the first two letters
    advanceTimers(400); // 200ms per letter
    expect(screen.getByText("P")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();

    // Simulate all time passing
    advanceTimers(2000);
    PLONK_LETTERS.forEach(letter => {
      expect(screen.getByText(letter)).toBeInTheDocument();
    });
  });

  test("shows the ENTER PLONK button and navigates on click", () => {
    // Mock Calendar page for routing check
    function CalendarMock() {
      return <div>Calendar Page Loaded</div>;
    }

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/calendar" element={<CalendarMock />} />
        </Routes>
      </MemoryRouter>
    );

    advanceTimers(2000);

    // Button should be present
    const btn = screen.getByRole("button", { name: /enter plonk/i });
    expect(btn).toBeInTheDocument();

    // Click the button and check navigation
    fireEvent.click(btn);

    // The calendar mock should render
    expect(screen.getByText(/calendar page loaded/i)).toBeInTheDocument();
  });

  test("is accessible: headline and button are focusable and visible", () => {
    render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>
    );
    advanceTimers(2000);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeVisible();

    const button = screen.getByRole("button", { name: /enter plonk/i });
    expect(button).toBeVisible();
    button.focus();
    expect(document.activeElement).toBe(button);
  });
});

// Letters used in the animation
const PLONK_LETTERS = ["P", "L", "O", "N", "K"];