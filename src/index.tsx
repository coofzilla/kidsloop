import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import App from "components/App";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";

const Root = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App theme={theme} />}>
          <Route
            path="login"
            element={<SignIn switchTheme={switchTheme} theme={theme} />}
          />
          <Route
            path="signup"
            element={<SignUp switchTheme={switchTheme} theme={theme} />}
          />
          <Route
            path="forgot-password"
            element={<ForgotPassword switchTheme={switchTheme} theme={theme} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Root />);
