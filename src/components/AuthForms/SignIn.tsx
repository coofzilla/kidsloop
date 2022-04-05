import { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Logo from "kidsloop_min_logo.svg";
import styles from "components/AuthForms/SignIn.module.css";

interface AuthFormProps {
  header: string;
}

const AuthForm = ({ header }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      sx={{
        borderRadius: "12px",
        boxShadow: 10,
        padding: "24px",
        maxWidth: "320px",
      }}
      maxWidth={false}
    >
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
            sx={{
              marginTop: "12px",
              marginBottom: "12px",
            }}
            InputProps={{
              style: {
                borderRadius: "12px",
              },
            }}
            required
            fullWidth
            label="Email or Phone"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{
              marginBottom: "12px",
            }}
            InputProps={{
              style: {
                borderRadius: "12px",
              },
            }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AuthForm;
