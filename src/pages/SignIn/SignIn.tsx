import { useContext } from "react";
import useAuthHandlers from "hooks/useAuthHandlers";

import LanguageContext from "contexts/LanguageContext";

import { Link } from "react-router-dom";

import Card from "components/AuthContainer/Card";
import Footer from "components/Footer/Footer";
import TextFields from "components/TextFields/TextFields";

import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

import Logo from "kidsloop_min_logo.svg";
import styles from "pages/SignIn/SignIn.module.css";

interface SignInProps {
  switchTheme: () => void;
  theme: string;
}

const SignIn = ({ switchTheme, theme }: SignInProps) => {
  const { language } = useContext(LanguageContext);
  const {
    emailChangeHandler,
    passwordChangeHandler,
    emailOrPhone,
    password,
    emailPhoneError,
    passwordError,
    isLoading,
    onSignInHandler,
  } = useAuthHandlers();

  return (
    <div className={styles.content_wrapper}>
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
            {language === "한국어" ? "로그인" : "Sign In"}
          </Typography>
          <Box component="form">
            <TextFields
              language={language}
              emailOrPhone={emailOrPhone}
              emailChangeHandler={emailChangeHandler}
              emailPhoneError={emailPhoneError}
              password={password}
              passwordChangeHandler={passwordChangeHandler}
              passwordError={passwordError}
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
              {language === "한국어"
                ? "비밀번호를 잊으셨나요?"
                : "Forgot your password?"}
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
                onClick={onSignInHandler}
              >
                {language === "한국어" ? "로그인" : "Sign In"}
              </Button>
            )}
          </Stack>
          <Link className={styles.link} to="/signup">
            {language === "한국어" ? "가입하기" : "Create an account"}
          </Link>
        </Box>
      </Card>
      <Footer switchTheme={switchTheme} theme={theme} />
    </div>
  );
};

export default SignIn;
