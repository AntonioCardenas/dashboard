import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../states/AuthContext";
import CoopLogo from "./common/CoopLogo";
import LangChooser from "./common/LangChooser";
import {
  isValidCellphone,
  isValidEmail,
  errorNotification,
} from "../utils/utils";

const Login = () => {
  const { t } = useTranslation();
  const areaCode = "+504";
  const navigate = useNavigate();
  const { authContext, authState } = useAuthContext();
  const [state] = authState;
  const [userInput, setUserInput] = useState("");
  const [userInputError, setUserInputError] = useState("");

  useEffect(() => {
    function check() {
      if (state.isLoggedIn) {
        navigate("/", { replace: true });
      } else if (state.isSignInError) {
        errorNotification("La cuenta no existe.");
        setUserInput("");
      }
    }

    check();
    // eslint-disable-next-line
  }, [state.isLoggedIn, state.isSignInError]);

  const magicLogin = async () => {
    if (isValidEmail(userInput)) {
      authContext.signIn({ emailLogin: true, credential: userInput });
    } else if (isValidCellphone(userInput)) {
      authContext.signIn({
        emailLogin: false,
        credential: areaCode.concat(userInput),
      });
    }
  };

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.target.value;
    setUserInput(input);
    if (isValidCellphone(input) || isValidEmail(input)) {
      setUserInputError("");
    } else {
      setUserInputError("El valor no es valido.");
    }
  };

  return (
      <>



    <div className="login">
      <div className="card auth-card">
        <div className="card-body">
          <div className="header">
            <CoopLogo className="logo" />
            <h3>
              <>{t("login.title")}</>
            </h3>
          </div>
          <div className="form-control" onSubmit={() => magicLogin()}>
            <label className="input-group mb-3 border-0">

              <input
                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                value={userInput}
                placeholder={t("placeholders.email")}
                onChange={handleUserInputChange}
              />
            </label>
            <div className="btn-container">
              <button
                className="btn btn-primary w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500"
                onClick={() => magicLogin()}
              >
                <>{t("login.access")}</>
              </button>
              <button
                className="auth-method w-full py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500"
                onClick={() => navigate("/signup", { replace: true })}
              >
                <u>
                  <>{t("login.create-account")}</>
                </u>
              </button>
              <span className="primary">
                <>{t("or")}</>
              </span>
              <button
                className="auth-method w-full py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500"
                onClick={() => navigate("/coffeebatches", { replace: true })}
              >
                <u>
                  <>{t("login.buyer-access")}</>
                </u>
              </button>
            </div>
          </div>
        </div>
      </div>
      <LangChooser/>
    </div>
      </>
  );
};

export default Login;
