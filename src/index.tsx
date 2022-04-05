import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App";
import AuthForm from "components/AuthForms/SignIn";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<AuthForm header="Sign In" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Root />);
