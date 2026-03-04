import React from "react";
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";

export default function App() {
  const [route, setRoute] = React.useState("home"); // "home" | "login" | "register"

  return (
    <>
      {route === "home" && (
        <Home
          onGoLogin={() => setRoute("login")}
          onGoRegister={() => setRoute("register")}
        />
      )}

      {route === "login" && (
        <Login
          onGoHome={() => setRoute("home")}
          onGoRegister={() => setRoute("register")} // login -> register
        />
      )}

      {route === "register" && (
        <Register
          onGoHome={() => setRoute("home")}
          onGoLogin={() => setRoute("login")} // register -> login
        />
      )}
    </>
  );
}