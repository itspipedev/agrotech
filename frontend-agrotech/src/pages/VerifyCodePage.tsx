import AuthTemplate from '../components/4-templates/AuthTemplate';
import VerifyCodeForm from '../components/3-organisms/VerifyCodeForm';
import type { View } from "../types/navigation";

function VerifyCodePage({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <AuthTemplate
      heroTitle="Código de verificación"
      heroSubtitle="Ingresa el código que enviamos a tu correo electrónico para continuar de manera segura."
      onBack={() => onNavigate('forgot-password')}
    >
      <VerifyCodeForm onSubmit={() => onNavigate('reset-password')} />
    </AuthTemplate>
  );
}

export default VerifyCodePage;