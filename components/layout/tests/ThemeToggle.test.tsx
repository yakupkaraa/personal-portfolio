import { render, screen, fireEvent} from "@testing-library/react";
import { ThemeToggle } from "../ThemeToggle";

const mockSetTheme = jest.fn();

//EN
//next-themes will not function within the test environment since it needs access to browser APIs.
//Using the dummy useTheme hook, testing is done on the components alone.

//TR
//next-themes, tarayıcı API'lerine erişim gerektirdiği için test ortamında çalışmaz. 
//Sahte useTheme hook'u kullanarak yalnızca bileşenler üzerinde test yapılır.

jest.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "light",
    setTheme: mockSetTheme,
  }),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it("renders toggle button", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: "Toggle theme" })).toBeInTheDocument();
  });

  it("calls setTheme with dark when clicked on light mode", () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });
});