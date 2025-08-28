import { useState } from "react";
import "./styles/global.css";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

type View = "landing" | "auth" | "forgot-password" | "reset-password";

function App() {
  const [view, setView] = useState<View>("landing");

  const navigateTo = (targetView: View) => setView(targetView);

  // Renderizado condicional basado en la vista actual
  const renderCurrentView = () => {
    switch (view) {
      case "auth":
        return <AuthPage onNavigate={navigateTo} />;
      case "forgot-password":
        return <ForgotPasswordPage onNavigate={navigateTo} />;
      case "reset-password":
        return <ResetPasswordPage onNavigate={navigateTo} />;
      case "landing":
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      {renderCurrentView()}
    </>
  );
}

export default App;
