import AuthTemplate from "../components/4-templates/AuthTemplate";
import ForgotPasswordForm from "../components/3-organisms/ForgotPasswordForm";
import type { View } from "../types/navigation";

function ForgotPasswordPage({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <AuthTemplate
      heroTitle="Recupera tu acceso"
      heroSubtitle="Escribe tu correo y te enviaremos un enlace para restablecer tu contraseña."
      onBack={() => onNavigate('auth')}
    >
      <ForgotPasswordForm onSubmit={() => onNavigate('reset-password')} />
    </AuthTemplate>
  );
}
export default ForgotPasswordPage;