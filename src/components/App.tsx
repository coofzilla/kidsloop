import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

import useLocalStorage from "use-local-storage";
import Footer from "components/Footer/Footer";

const App = () => {
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
    <Container
      disableGutters={true}
      data-theme={theme}
      sx={{
        background: "var(--background)",
        minHeight: "100vh",
        minWidth: "100vh",
      }}
    >
      <Outlet />
      <Footer switchTheme={switchTheme} theme={theme} />
    </Container>
  );
};

export default App;
