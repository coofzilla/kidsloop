import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Logo from "kidsloop_min_logo.svg";
import styles from "components/AuthForms/SignIn.module.css";
import { fontSize } from "@mui/system";

interface AuthFormProps {
  header: string;
}

const AuthForm = ({ header }: AuthFormProps) => {
  return (
    <Container className={styles.auth_container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container disableGutters>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Container>

        <Typography variant="h3" align="left" style={{ fontSize: "36px" }}>
          {header}
        </Typography>
        <Box component="form">
          <TextField
            className={styles.email_field}
            required
            fullWidth
            id="email"
            label="Email or Phone"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className={styles.password_field}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AuthForm;
