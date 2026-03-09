import React from "react";

import Home from "./page/Home/home";
import Login from "./page/Login-Register/login";
import Register from "./page/Login-Register/register";

import Contact from "./page/Home/contact";
import Courses from "./page/Home/courses";
import Teaching from "./page/Home/teaching";

export default function App() {
  // routes: "home" | "courses" | "teaching" | "contact" | "login" | "register"
  const [route, setRoute] = React.useState("home");

  const goHome = () => setRoute("home");
  const goCourses = () => setRoute("courses");
  const goTeaching = () => setRoute("teaching");
  const goContact = () => setRoute("contact");
  const goLogin = () => setRoute("login");
  const goRegister = () => setRoute("register");

  if (route === "courses") return <Courses onGoHome={goHome} />;
  if (route === "teaching") return <Teaching onGoHome={goHome} />;
  if (route === "contact") return <Contact onGoHome={goHome} />;

  if (route === "login")
    return <Login onGoHome={goHome} onGoRegister={goRegister} />;

  if (route === "register")
    return <Register onGoHome={goHome} onGoLogin={goLogin} />;

  return (
    <Home
      onGoHome={goHome}
      onGoCourses={goCourses}
      onGoTeaching={goTeaching}
      onGoContact={goContact}
      onGoLogin={goLogin}
      onGoRegister={goRegister}
    />
  );
}