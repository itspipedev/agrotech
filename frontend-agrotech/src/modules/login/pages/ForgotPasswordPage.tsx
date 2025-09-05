import AuthTemplate from "../components/4-templates/AuthTemplate";
import ForgotPasswordForm from "../components/3-organisms/ForgotPasswordForm";
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <AuthTemplate
      heroTitle="Recupera tu acceso"
      heroSubtitle="Escribe tu correo y te enviaremos un enlace para restablecer tu contraseña."
      onBack={() => navigate('/auth')}
    >
      <ForgotPasswordForm onSubmit={() => navigate('/verify-code')} />
    </AuthTemplate>
  );
}

export default ForgotPasswordPage;