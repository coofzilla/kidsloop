import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

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
      <Outlet />
    </Container>
  );
};

export default App;
