import { useState, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import kidsloop from "api/loopInstance";

import isPhoneNumber from "utils/validate-number";
import isEmail from "utils/validate-email";

const useAuthHandlers = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailPhoneError, setEmailPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

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

  const onSignInHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!emailOrPhone.length) setEmailPhoneError(true);
    if (!password.length) setPasswordError(true);
    if (!emailOrPhone.length || !password.length) return;
    if (emailPhoneError || passwordError) return;
    setIsLoading(true);

    const { data } = await kidsloop.patch("/sign-in", {
      emailOrPhone,
      password,
    });
    setIsLoading(false);
    console.log(`Welcome, ${data.name}`);
  };

  const onSignUpHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!emailOrPhone.length) setEmailPhoneError(true);
    if (!password.length) setPasswordError(true);
    if (!emailOrPhone.length || !password.length) return;
    if (emailPhoneError || passwordError) return;
    setIsLoading(true);

    const { data } = await kidsloop.patch("/sign-up", {
      emailOrPhone,
      password,
    });
    setIsLoading(false);
    console.log(data.id);
    navigate("/");
  };

  const onForgotHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!emailOrPhone.length) return setEmailPhoneError(true);
    if (emailPhoneError) return;
    setIsLoading(true);
    const { data } = await kidsloop.patch("/reset-password", {
      emailOrPhone,
    });
    setIsLoading(false);
    console.log(data.actionCompleted);
    navigate("/");
  };

  return {
    emailChangeHandler,
    passwordChangeHandler,
    emailOrPhone,
    password,
    emailPhoneError,
    passwordError,
    isLoading,
    onSignInHandler,
    onSignUpHandler,
    onForgotHandler,
  };
};

export default useAuthHandlers;
