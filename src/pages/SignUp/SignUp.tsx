import { useContext } from "react";
import LanguageContext from "contexts/LanguageContext";
import useAuthHandlers from "hooks/useAuthHandlers";
import { KOREAN } from "consts";

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

import Logo from "assets/kidsloop_min_logo.svg";
import styles from "pages/SignUp/SignUp.module.css";
import "styles.css";

interface SignUpProps {
  switchTheme: () => void;
  theme: string;
}

const SignUp = ({ switchTheme, theme }: SignUpProps) => {
  const { language } = useContext(LanguageContext);
  const {
    emailChangeHandler,
    passwordChangeHandler,
    emailOrPhone,
    password,
    emailPhoneError,
    passwordError,
    isLoading,
    onSignUpHandler,
  } = useAuthHandlers();

  const isKorean = language === KOREAN;

  return (
    <div className="content_wrapper">
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container disableGutters>
            <img src={Logo} alt="logo" className="logo" />
          </Container>
          <Typography
            variant="h3"
            align="left"
            style={{ fontSize: "36px", color: "var(--text)" }}
          >
            {isKorean ? "회원가입" : "Sign Up"}
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
            <Link className={styles.link} to="/">
              {isKorean
                ? "이미 사용중인 계정있나요?"
                : "Already have an account?"}
            </Link>
            {isLoading ? (
              <CircularProgress size={36.5} />
            ) : (
              <Button
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  padding: "5px 25px",
                }}
                variant="contained"
                onClick={onSignUpHandler}
              >
                {isKorean ? "회원가입" : "Sign Up"}
              </Button>
            )}
          </Stack>
          {/* prevent jumping on switch */}
          <span style={{ height: "15px" }}>&nbsp;&nbsp;</span>
        </Box>
      </Card>
      <Footer switchTheme={switchTheme} theme={theme} />
    </div>
  );
};

export default SignUp;
