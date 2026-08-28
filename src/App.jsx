import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

function getRoute() {
  const hash = window.location.hash;

  if (hash === "#auth-signup") {
    return {
      page: "auth",
      authMode: "signup",
    };
  }

  if (hash === "#auth-signin") {
    return {
      page: "auth",
      authMode: "signin",
    };
  }

  return {
    page: "landing",
    authMode: "signin",
  };
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigate = (nextPage) => {
    if (nextPage === "signup") {
      window.location.hash = "auth-signup";
      return;
    }

    if (nextPage === "signin" || nextPage === "auth") {
      window.location.hash = "auth-signin";
      return;
    }

    window.location.hash = "landing";
  };

  if (route.page === "auth") {
    return (
      <AuthPage
        onNavigate={handleNavigate}
        initialMode={route.authMode}
      />
    );
  }

  return <LandingPage onNavigate={handleNavigate} />;
}