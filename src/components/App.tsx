import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { LanguageStore } from "contexts/LanguageContext";

interface AppProps {
  theme: string;
}

const App = ({ theme }: AppProps) => {
  return (
    <Container
      data-theme={theme}
      sx={{
        background: "var(--background)",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LanguageStore>
        <Outlet />
      </LanguageStore>
    </Container>
  );
};

export default App;
