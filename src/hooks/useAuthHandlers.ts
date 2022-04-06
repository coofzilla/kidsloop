import { useState, SetStateAction } from "react";

import isPhoneNumber from "utils/validate-number";
import isEmail from "utils/validate-email";

const useAuthHandlers = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailPhoneError, setEmailPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

  const passwordChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setPasswordError(password.length < 5);
  };

  return [
    emailChangeHandler,
    passwordChangeHandler,
    emailOrPhone,
    password,
    emailPhoneError,
    passwordError,
  ];
};

export default useAuthHandlers;
