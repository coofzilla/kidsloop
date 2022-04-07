import TextField from "@mui/material/TextField";

interface TextFieldsProps {
  language: string;
  emailOrPhone: any;
  emailChangeHandler: any;
  emailPhoneError: any;
  password: any;
  passwordChangeHandler: any;
  passwordError: any;
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
          language === "한국어" ? "이메일 또는 전화번호" : "Email or Phone"
        }
        name="email"
        autoComplete="email"
        autoFocus
        value={emailOrPhone}
        onChange={emailChangeHandler}
        error={emailPhoneError ? true : false}
        helperText={
          emailPhoneError
            ? language === "한국어"
              ? "사용 가능한 이메일 주소를 입력해 주세요"
              : "enter a valid email or phone number"
            : ""
        }
      />
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
          },
        }}
        size="small"
        required
        fullWidth
        name="password"
        label={language === "한국어" ? "패스워드" : "Password"}
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={passwordChangeHandler}
        error={passwordError ? true : false}
        helperText={
          passwordError
            ? language === "한국어"
              ? "패스워드를 입력하세요"
              : "please enter a valid password"
            : ""
        }
      />
    </>
  );
};

export default TextFields;
