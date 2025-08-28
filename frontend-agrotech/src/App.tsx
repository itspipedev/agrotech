import { useState } from 'react';
import './styles/global.css';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

type View = 'landing' | 'auth';

function App() {
  const [view, setView] = useState<View>('landing');

  const handleLoginClick = () => setView('auth');

  return (
    <>
      {view === 'landing' && <LandingPage onLoginClick={handleLoginClick} />}
      {view === 'auth' && <AuthPage />}
    </>
  );
}

export default App;
