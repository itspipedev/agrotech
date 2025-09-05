import Image from "../1-atoms/Image";
import BackButton from "../1-atoms/BackButton";


function AuthTemplate({ children, heroTitle, heroSubtitle, onBack }: { children: React.ReactNode; heroTitle: string; heroSubtitle: string; onBack?: () => void; }) {
  return (
    <div className="page">
      <aside
        className="hero-login"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.35)), url("/SeñoraLogin.jpeg")', position: 'relative' }}
      >
        <div className="hero-text-overlay">
          <h1 className="hero-text-overlay__title">{heroTitle}</h1>
          <p className="hero-text-overlay__subtitle">{heroSubtitle}</p>
        </div>
      </aside>
      <main className="panel">
        <div className="auth-panel">
          {onBack && <BackButton onClick={onBack} />}
          {children}
          <Image src="/logoSena.png" alt="Logo SENA" style={{ height: '40px', display: 'block', margin: '2rem 0 0 auto' }} />
        </div>
      </main>
    </div>
  );
}

export default AuthTemplate;
