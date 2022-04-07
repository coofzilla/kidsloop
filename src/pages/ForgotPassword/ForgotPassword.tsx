import { useContext } from "react";
import LanguageContext from "contexts/LanguageContext";
import useAuthHandlers from "hooks/useAuthHandlers";
import { KOREAN } from "consts";
import { Link } from "react-router-dom";

import Card from "components/AuthContainer/Card";
import Footer from "components/Footer/Footer";

import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";

import Logo from "kidsloop_min_logo.svg";
import styles from "pages/ForgotPassword/ForgotPassword.module.css";
import "styles.css";

interface ForgotPasswordProps {
  switchTheme: () => void;
  theme: string;
}

const ForgotPassword = ({ switchTheme, theme }: ForgotPasswordProps) => {
  const { language } = useContext(LanguageContext);
  const {
    emailChangeHandler,
    onForgotHandler,
    emailOrPhone,
    emailPhoneError,
    isLoading,
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
            style={{ fontSize: "24px", color: "var(--text)" }}
          >
            {isKorean
              ? "비밀번호를 잊으셨나요?"
              : "Forgot Your Password?"}
          </Typography>
          <div className={styles.forgot_password_message}>
            {isKorean
              ? "이메일이나 전화 번호를 입력하시면 암호를 재설정할 수 있는 링크를 보내드리겠습니다."
              : "Please enter your email or phone number and we will send you a link to reset your password"}
          </div>
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
                fontSize: "12px",
                paddingTop: "2px",
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
            label={
              isKorean ? "이메일 또는 전화번호" : "Email or Phone"
            }
            name="email"
            autoComplete="email"
            autoFocus
            value={emailOrPhone}
            onChange={emailChangeHandler}
            error={emailPhoneError ? true : false}
            helperText={
              //nested because only want to show if error
              emailPhoneError
                ? isKorean
                  ? "사용 가능한 이메일 주소를 입력해 주세요"
                  : "enter a valid email or phone number"
                : ""
            }
          />

          <Stack
            sx={{
              marginTop: "24px",
              marginBottom: "12px",
            }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link className={styles.link} to="/">
              {isKorean ? "다시 로그인하기" : "Back to sign in"}
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
                onClick={onForgotHandler}
              >
                {isKorean ? "링크를 보내" : "Send Link"}
              </Button>
            )}
          </Stack>
        </Box>
      </Card>
      <Footer switchTheme={switchTheme} theme={theme} />
    </div>
  );
};

export default ForgotPassword;
