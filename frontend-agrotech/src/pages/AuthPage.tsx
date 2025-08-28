import { useState } from "react";
import AuthTemplate from "../components/4-templates/AuthTemplate";
import LoginForm from "../components/3-organisms/LoginForm";
import RegisterForm from "../components/3-organisms/RegisterForm";
import type { View } from "../types/navigation";

type Mode = "login" | "register";

function AuthPage({ onNavigate }: { onNavigate: (v: View) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");

  const heroContent = {
    login: {
      title: "Bienvenido",
      subtitle: "conectate de nuevo con tus cultivos",
    },
    register: {
      title: "Crea tu Cuenta",
      subtitle: "Empieza a gestionar tus cultivos",
    },
  };

  return (
    <AuthTemplate
      heroTitle={heroContent[mode].title}
      heroSubtitle={heroContent[mode].subtitle}
    >
      {mode === "login" ? (
        <LoginForm
          onSwitch={() => setMode("register")}
          onForgotPassword={() => onNavigate("forgot-password")}
          onBack={() => onNavigate("landing")}
        />
      ) : (
        <RegisterForm
          onSwitch={() => setMode("login")}
          onBack={() => setMode("login")}
        />
      )}
    </AuthTemplate>
  );
}

export default AuthPage;
