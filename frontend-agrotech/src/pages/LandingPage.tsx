import MainTemplate from '../components/4-templates/MainTemplate';

function LandingPage({ onLoginClick }: { onLoginClick: () => void }) {
  return <MainTemplate onLoginClick={onLoginClick} />;
}

export default LandingPage;