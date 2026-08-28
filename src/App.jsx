import { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

export default function App() {
  const [page, setPage] = useState("landing");
  const [authMode, setAuthMode] = useState("signin");

  const handleNavigate = (nextPage) => {
    if (nextPage === "signin" || nextPage === "signup") {
      setAuthMode(nextPage);
      setPage("auth");
    } else {
      setPage(nextPage);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (page === "auth") {
    return (
      <AuthPage
        onNavigate={handleNavigate}
        initialMode={authMode}
      />
    );
  }

  return <LandingPage onNavigate={handleNavigate} />;
}