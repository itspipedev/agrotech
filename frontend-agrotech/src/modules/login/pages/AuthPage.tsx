import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthTemplate from "../components/4-templates/AuthTemplate";
import LoginForm from "../components/3-organisms/LoginForm";
import RegisterForm from "../components/3-organisms/RegisterForm";

type Mode = "login" | "register";

function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");

  // Detectar si la URL tiene ?view=register
  useEffect(() => {
    const view = searchParams.get("view");
    if (view === "register") {
      setMode("register");
    }
  }, [searchParams]);

  const heroContent = {
    login: {
      title: "Bienvenido",
      subtitle: "Conectate de nuevo con tus cultivos",
    },
    register: {
      title: "Crea tu Cuenta",
      subtitle: "Empieza a gestionar tus cultivos",
    },
  };

  const handleLoginSuccess = () => {
    navigate('/dashboard/cultivos');
  };

  return (
    <AuthTemplate
      heroTitle={heroContent[mode].title}
      heroSubtitle={heroContent[mode].subtitle}
    >
      {mode === "login" ? (
        <LoginForm
          onSwitch={() => setMode("register")}
          onForgotPassword={() => navigate('/forgot-password')}
          onBack={() => navigate('/')}
          onLoginSuccess={handleLoginSuccess}
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
