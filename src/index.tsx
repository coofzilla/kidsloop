import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App";
import AuthForm from "components/AuthForms/SignIn";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<AuthForm header="Sign In"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
