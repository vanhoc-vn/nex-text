import React, { useState } from "react";
import "./login_register.css";

export default function Register({ onGoHome, onGoLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

          <h1 className="authTitle">Create Account</h1>

          <form className="authForm" onSubmit={onSubmit}>
            <label className="authLabel">
              Full Name
              <div className="authField">
                <input
                  className="authInput"
                  type="text"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </label>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="authLabel">
              Confirm Password
              <div className="authField">
                <input
                  className="authInput"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </label>

            <button className="authBtn" type="submit">
              Register
            </button>

            <div className="authFooterText">
              Already have account?{" "}
              <button type="button" className="authLinkBtn" onClick={onGoLogin}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}