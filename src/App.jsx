import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import KBUpload from "./pages/KBUpload.jsx";
import KBList from "./pages/KBList.jsx";
import ValidateUpload from "./pages/ValidateUpload.jsx";
import ValidationResults from "./pages/ValidationResults.jsx";
import ValidationHistory from "./pages/ValidationHistory.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";

function getInitialRoute() {
  const hash = window.location.hash;

  switch (hash) {
    case "#auth-signup":
      return { page: "auth", authMode: "signup" };

    case "#auth-signin":
      return { page: "auth", authMode: "signin" };

    case "#kb-upload":
      return { page: "upload" };

    case "#knowledge-base":
      return { page: "knowledge-base" };

    case "#validate":
      return { page: "validate" };

    case "#results":
      return { page: "results" };

    case "#history":
      return { page: "history" };

    case "#settings":
    case "#profile":
      return { page: "settings" };

    default:
      return { page: "landing" };
  }
}

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getInitialRoute());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigate = (nextPage) => {
    switch (nextPage) {
      case "signup":
        window.location.hash = "auth-signup";
        break;

      case "signin":
      case "auth":
        window.location.hash = "auth-signin";
        break;

      case "workspace":
      case "knowledge-base":
        window.location.hash = "knowledge-base";
        break;

      case "upload":
        window.location.hash = "kb-upload";
        break;

      case "validate":
        window.location.hash = "validate";
        break;

      case "results":
        window.location.hash = "results";
        break;

      case "history":
        window.location.hash = "history";
        break;

      case "settings":
      case "profile":
        window.location.hash = "settings";
        break;

      default:
        window.location.hash = "landing";
    }
  };

  const handleSignOut = () => {
    window.location.hash = "landing";
  };

  if (route.page === "auth") {
    return (
      <AuthPage
        initialMode={route.authMode}
        onNavigate={handleNavigate}
        onAuthSuccess={() => handleNavigate("workspace")}
      />
    );
  }

  if (route.page === "upload") {
    return (
      <KBUpload
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "knowledge-base") {
    return (
      <KBList
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "validate") {
    return (
      <ValidateUpload
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "results") {
    return (
      <ValidationResults
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "history") {
    return (
      <ValidationHistory
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "settings") {
    return (
      <ProfileSettings
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  return <LandingPage onNavigate={handleNavigate} />;
}