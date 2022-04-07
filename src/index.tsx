import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App";
import AuthForm from "pages/SignIn/SignIn";
import useLocalStorage from "use-local-storage";

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
            element={<AuthForm switchTheme={switchTheme} theme={theme} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Root />);
