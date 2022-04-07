import TextField from "@mui/material/TextField";

import { KOREAN } from "consts";

interface TextFieldsProps {
  language?: string;
  emailOrPhone: string;
  emailChangeHandler: (e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  emailPhoneError: boolean;
  password: string;
  passwordChangeHandler: (e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  passwordError: boolean;
}

const TextFields = ({
  language,
  emailOrPhone,
  emailChangeHandler,
  emailPhoneError,
  password,
  passwordChangeHandler,
  passwordError,
}: TextFieldsProps) => {
  const isKorean = language === KOREAN;

  return (
    <>
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
        label={isKorean ? "이메일 또는 전화번호" : "Email or Phone"}
        name="email"
        autoComplete="email"
        autoFocus
        value={emailOrPhone}
        onChange={emailChangeHandler}
        error={emailPhoneError ? true : false}
        helperText={
          emailPhoneError
            ? isKorean
              ? "사용 가능한 이메일 주소를 입력해 주세요"
              : "enter a valid email or phone number"
            : ""
        }
      />
      <TextField
        sx={{
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
          },
        }}
        size="small"
        required
        fullWidth
        name="password"
        label={isKorean ? "패스워드" : "Password"}
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={passwordChangeHandler}
        error={passwordError ? true : false}
        helperText={
          passwordError
            ? isKorean
              ? "패스워드를 입력하세요"
              : "please enter a valid password"
            : ""
        }
      />
    </>
  );
};

export default TextFields;
