import React, { useState } from "react";
import "./login_register.css";

export default function Login({ onGoHome, onGoRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="authPage">
      <div className="authBg" />
      <div className="authWrap">
        <div className="authCard authFadeIn">
          <button className="authBack" type="button" onClick={onGoHome}>
            ← 
          </button>

          <div className="authBrand">
            <div className="authBrandMark">N</div>
            <div className="authBrandText">Nex.edu</div>
          </div>

          <h1 className="authTitle">Welcome Back</h1>

          <form className="authForm" onSubmit={onSubmit}>
            <label className="authLabel">
              Email
              <div className="authField">
                <input
                  className="authInput"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="authLabel">
              Password
              <div className="authField">
                <input
                  className="authInput"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </label>

            <div className="authRow">
              <label className="authCheckbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <a className="authLink" href="#">
                Forgot password
              </a>
            </div>

            <button className="authBtn" type="submit">
              Sign In
            </button>

            <div className="authFooterText">
              Don’t have account?{" "}
              <button
                type="button"
                className="authLinkBtn"
                onClick={onGoRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}