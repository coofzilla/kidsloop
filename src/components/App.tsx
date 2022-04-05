import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
const App = () => {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
};

export default App;
