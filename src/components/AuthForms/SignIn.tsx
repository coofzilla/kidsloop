import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import kidsloop from "api/kidsloop";

import isPhoneNumber from "utils/validate-number";
import isEmail from "utils/validate-email";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "components/AuthContainer/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import Logo from "kidsloop_min_logo.svg";
import styles from "components/AuthForms/SignIn.module.css";

interface AuthFormProps {
  header: string;
}

const AuthForm = ({ header }: AuthFormProps) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailPhoneError, setEmailPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //move all of the state logic and handlers into a custom hook
  const emailChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmailOrPhone(e.target.value);
    if (!isPhoneNumber(emailOrPhone) || !isEmail(emailOrPhone)) {
      setEmailPhoneError(true);
    }
    if (isPhoneNumber(emailOrPhone) || isEmail(emailOrPhone)) {
      setEmailPhoneError(false);
    }
  };
  //figure out why not switching error flag when deleting only a few numbers
  const passwordChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setPasswordError(password.length < 5);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (emailPhoneError || passwordError) return;
    setIsLoading(true);
    const { data } = await kidsloop.patch("/sign-in", {
      emailOrPhone,
      password,
    });
    setIsLoading(false);
    console.log(`Welcome, ${data.name}`);
  };

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container disableGutters>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Container>
        <Typography
          variant="h3"
          align="left"
          style={{ fontSize: "36px", color: "var(--text)" }}
        >
          {header}
        </Typography>
        <Box component="form">
          <TextField
            sx={{
              marginTop: "12px",
              marginBottom: "12px",
              "& .MuiOutlinedInput-input": {
                color: "var(--text)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--inputBorder)",
              },
              "& .MuiInputLabel-root": {
                color: "var(--labelText)",
              },
            }}
            InputProps={{
              style: {
                borderRadius: "12px",
                color: "red",
              },
            }}
            size="small"
            required
            fullWidth
            label="Email or Phone"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailOrPhone}
            onChange={emailChangeHandler}
            error={emailPhoneError ? true : false}
            helperText={
              emailPhoneError ? "Please enter valid email or phone number" : ""
            }
          />
          <TextField
            sx={{
              marginBottom: "12px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--inputBorder)",
              },
              "& .MuiInputLabel-root": {
                color: "var(--labelText)",
              },
              "& .MuiOutlinedInput-input": {
                color: "var(--text)",
              },
            }}
            InputProps={{
              style: {
                borderRadius: "12px",
              },
            }}
            size="small"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={passwordChangeHandler}
            error={passwordError ? true : false}
          />
        </Box>
        <Stack
          sx={{
            marginBottom: "12px",
          }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link className={styles.link} to="/forgot-password">
            Forgot your password?
          </Link>
          {isLoading ? (
            <CircularProgress size={36.5} />
          ) : (
            <Button
              sx={{
                borderRadius: "12px",
                textTransform: "none",
              }}
              variant="contained"
              onClick={onSubmitHandler}
            >
              Sign In
            </Button>
          )}
        </Stack>
        <Link className={styles.link} to="signup">
          Create an account
        </Link>
      </Box>
    </Card>
  );
};

export default AuthForm;
