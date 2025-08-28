import MainTemplate from '../components/4-templates/MainTemplate';
import type { View } from "../types/navigation";

function LandingPage({ onNavigate }: { onNavigate: (v: View) => void }) {
  return <MainTemplate onLoginClick={() => onNavigate('auth')} />;
}


export default LandingPage;