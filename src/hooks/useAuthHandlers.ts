import { useState, SetStateAction } from "react";
import kidsloop from "api/kidsloop";

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

  const [isLoading, setIsLoading] = useState(false);

  const onSignInHandler = async (e: any) => {
    e.preventDefault();
    if (!password.length || !emailOrPhone.length) return;
    if (emailPhoneError || passwordError) return;
    setIsLoading(true);
    const { data } = await kidsloop.patch("/sign-in", {
      emailOrPhone,
      password,
    });
    setIsLoading(false);
    console.log(`Welcome, ${data.name}`);
  };

  return [
    emailChangeHandler,
    passwordChangeHandler,
    emailOrPhone,
    password,
    emailPhoneError,
    passwordError,
    isLoading,
    onSignInHandler,
  ] as const;
};

export default useAuthHandlers;