import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { LanguageStore } from "contexts/LanguageContext";

const App = ({ theme }: any) => {
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
