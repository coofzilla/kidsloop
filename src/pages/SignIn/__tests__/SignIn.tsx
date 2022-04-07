import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SignIn from "pages/SignIn/SignIn";

test("should show sign in form", () => {
    render(<SignIn switchTheme={() => {}} theme="" />, { wrapper: MemoryRouter });
    const input = screen.getByText("Email or Phone");
});
